<template>
  <div class="splitter-container splitter-x flex select-none">
    <div
        :class="{ 'is-resizing': isResizing }"
        class="splitter-pane left-pane flex items-center overflow-hidden"
        :style="{ width: leftPaneWidth + '%' }"
    >
      <slot name="left"></slot>
    </div>
    <div
        :class="{ 'is-resizing': isResizing }"
        class="splitter-gutter flex flex-shrink-0 items-center bg-gray-50 hover:bg-gray-100/80 cursor-move border-l border-r"
        @mousedown="startResize"
    >
      <div class="splitter-handle">
        <icon name="mdi:drag-vertical"/>
      </div>
    </div>
    <div
        :class="{ 'is-resizing': isResizing }"
        class="splitter-pane right-pane flex items-center overflow-hidden"
        :style="{ width: rightPaneWidth + '%' }"
    >
      <slot name="right"></slot>
    </div>
  </div>
</template>


<script>
 export default {
  name: 'SplitterX',

  props: {
    leftColumnSize: {
      type: Number,
      default: 50
    },
    rightColumnSize: {
      type: Number,
      default: 50
    }
  },

  setup(props) {


    const leftPaneWidth = ref(props.leftColumnSize)
    const rightPaneWidth = ref(props.rightColumnSize)
    const startX = ref(0)
    const isResizing = ref(false)

    const startResize = (e) => {
      startX.value = e.clientX
      document.addEventListener('mousemove', resize)
      document.addEventListener('mouseup', stopResize)
      isResizing.value = true
    }

    const resize = (e) => {
      const delta = e.clientX - startX.value

      let total = leftPaneWidth.value + rightPaneWidth.value

      leftPaneWidth.value += ((delta / total) * 100) / 15
      rightPaneWidth.value -= ((delta / total) * 100) / 15


      startX.value = e.clientX
      isResizing.value = true
    }

    const stopResize = () => {
      document.removeEventListener('mousemove', resize)
      document.removeEventListener('mouseup', stopResize)
      isResizing.value = false
    }

    return {
      leftPaneWidth,
      rightPaneWidth,
      startX,
      isResizing,
      startResize,
      resize,
      stopResize,
    }
  }
}
</script>

