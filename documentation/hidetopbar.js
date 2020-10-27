function HideTopbarPlugin() {
  // this plugin overrides the Topbar component to return nothing
  return {
    components: {
      Topbar: function() { return null }
    }
  }
}