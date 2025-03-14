// SortSelectView.js
import Backbone from '@canvas/backbone'

export default class SortSelectView extends Backbone.View {
  events() {
    return {
      'change': 'onChange'
    }
  }

  onChange(e) {
    const value = this.$el.val()
    this.collection.setParam('sort', value)
    // fetch は RosterView が setParam を listen しているので自動実行！
  }
}
