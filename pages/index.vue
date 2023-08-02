<template>
    <div class="wrapper" @scroll="handleScroll">
        <div class="background-image">
            <img class="image" :src="`/_nuxt/assets/images/${currentImage}`" alt=""/>
        </div>

        <div class="bottom-info">
            <span class="bottom-text">{{ hasStartScrolling ? 'Read time 2 min' : 'Scroll to explore' }}</span>
            <svg v-if="hasStartScrolling" class="circle-completion" width="22" height="22" viewBox="0 0 22 22" fill="none">
                <circle opacity="0.2" cx="11" cy="11" r="10" stroke="white"></circle>
                <circle class="circle-completion-fill" opacity="1" cx="11" cy="11" r="10" stroke="white"></circle>
            </svg>
            <span v-else class="icon-wrapper">
                <Icon name="ph:caret-down-light"/>
            </span>
        </div>
    </div>
</template>

<script setup>

onMounted(() => {
    window.addEventListener('scroll', updateBackgroundImage)
})

onBeforeUnmount(() => {
    window.removeEventListener('scroll', updateBackgroundImage)
})

const hasStartScrolling = ref(false) 

const currentImage = computed(() => {
    return `ezgif-frame-${currentImageIndex.value}.jpg`
})
const currentImageIndex = ref('001')

const readCompletionFill = ref(62.5)
function updateBackgroundImage() {
    hasStartScrolling.value = window.pageYOffset > 0

    let relativeScrollPosition = Math.ceil(window.pageYOffset / 58) + 1
    
    if(relativeScrollPosition > 136) {
        currentImageIndex.value = 136
        return
    }

    relativeScrollPosition = String(relativeScrollPosition)
    while(relativeScrollPosition.length < 3) relativeScrollPosition = '0' + relativeScrollPosition

    currentImageIndex.value = relativeScrollPosition

    const scrollPercentage = 1.36 * (Number(relativeScrollPosition) - 1)
    readCompletionFill.value = 62.5 - 0.34 * scrollPercentage
}
</script>

<style lang="scss" scoped>
.wrapper {
    height: 8900px;
    .background-image {
        position: fixed;
        inset: 0;
        &:before {
            content: '';
            position: absolute;
            inset: 0;
            backdrop-filter: grayscale(100%) brightness(60%) contrast(105%);
        }
        .image {
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
    }

    .bottom-info {
        position: fixed;
        bottom: 32px;
        right: 32px;
        color: $pure_white;
        padding: 8px;
        border-radius: 8px;
        border: 1px solid rgba($pure_white, 0.4);
        opacity: 0.6;

        .bottom-text {
            font-size: 14px;
            margin-right: 8px;
        }

        .icon-wrapper {
            background-color: $pure_white;
            padding: 6px 8px;
            border-radius: 8px;
            height: fit-content;
            svg {
                opacity: 0;
                color: $pure_black;
                animation: icon-loop 3s;
                animation-iteration-count: infinite;
            }
        }

        .circle-completion {
            margin-bottom: -6px;

            &-fill {
                stroke-dashoffset: v-bind(readCompletionFill);
                stroke-dasharray: 62.4, 62.4;
            }
        }

        @keyframes icon-loop {
            0% {
                opacity: 0;
                transform: translateY(-20px);
            }
            20% {
                opacity: 1;
            }
            50% {
                opacity: 1;
            }
            70% {
                opacity: 0;
            }
            100% {
                opacity: 0;
                transform: translateY(10px);
            }
        }
    }
}
</style>