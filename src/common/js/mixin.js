import { mapMutations } from 'vuex'
import { findIndex } from 'common/js/util'

const commonMixin = {
  methods: {
    ...mapMutations({
      setMessagePopupState: 'SET_MESSAGE_POPUP_STATE',
      setMessagePopupOpions: 'SET_MESSAGE_POPUP_OPTIONS'
    })
  }
}

const tabBarMixin = {
  data: () => ({
    disabled: false,
    slideOptions: {
      loop: false,
      autoPlay: false,
      showDots: false,
      options: {
        click: false,
        listenScroll: true,
        probeType: 3,
        directionLockThreshold: 0
      }
    },
    scrollOptions: {
      directionLockThreshold: 0,
      pullDownRefresh: {
        threshold: 60,
        txt: '数据刷新成功'
      },
      pullUpLoad: true
    }
  }),
  computed: {
    // tabBar重置索引值
    initialIndex () {
      let index = 0
      index = findIndex(this.tabLabels, item => item.label === this.selectedLabel)
      return index
    }
  },
  methods: {
    // 当前页数
    changePage (current) {
      this.selectedLabel = this.tabLabels[current].label
    },
    // 滑块位置调整
    scroll (pos) {
      const x = Math.abs(pos.x)
      const tabItemWidth = this.$refs.tabNav.$el.clientWidth
      const slideScrollerWidth = this.$refs.slide.slide.scrollerWidth
      const deltaX = x / slideScrollerWidth * tabItemWidth
      this.$refs.tabNav.setSliderTransform(deltaX)
    }
  }
}

const pageDataMixin = {
  data () {
    return {
      currentPage: 0,
      pageSize: 10
    }
  }
}

export {
  commonMixin,
  tabBarMixin,
  pageDataMixin
}
