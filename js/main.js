new Vue({
  el: '#app',
  data: {
    activeIndex: null,
    items: [
      {},
      {
        spans: 4
      },
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {}
    ]
  },
  methods: {
    sort(s, index) {
      this.activeIndex = index;
      if(s === this.currentSort) {
        this.currentSortDir = this.currentSortDir==='asc'?'desc':'asc';
      }
      this.currentSort = s;
    }
  }
});
