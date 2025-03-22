export function get_navbar(active) {
    return `<div class="navbar">
        <a class="navbar-item${(active === "home") ? " active" : ""}" href="/">Home</a>
        <a class="navbar-item${(active === "counter") ? " active" : ""}" href="/counter/">Counter</a>
        <a class="navbar-item${(active === "bml_maker") ? " active" : ""}" href="/bml_maker/">Bookmarklet Maker</a>
        <a class="navbar-item${(active === "data_uri_maker") ? " active" : ""}" href="/data_uri_maker/">Data URI Maker</a>
        <a class="navbar-item${(active === "bm_collect") ? " active" : ""}" href="/bm_collect/">Bookmark Collection</a>
        <a class="navbar-item${(active === "lorem") ? " active" : ""}" href="/lorem/">Lorem Ipsum</a>
        <a class="navbar-item${(active === "blank") ? " active" : ""}" href="/blank/">Blank Page</a>
    </div>`
}
