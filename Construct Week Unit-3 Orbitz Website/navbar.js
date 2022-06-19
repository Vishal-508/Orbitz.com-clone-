function navbar(){
    return `<div id="vs-nav-main-con" >
      <div id="vs-nav-sub-con-1">
        <div id>
          <a href="index.html">
            <img
              src="https://www.orbitz.com/_dms/header/logo.svg?locale=en_US&siteid=70201&2"
              alt=""
            />
          </a>
          <nav id="vs-nav-more">
            <div>
              <button>
                <div>More travel</div>
                <img src="/arrow-down-sign-to-navigate.png" alt="" />
                <!-- <svg><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"></path></svg> -->
              </button>
            </div>
          </nav>
        </div>
        <div id="vs-nav-sub-con-2">
          <div><a href="#">list your property</a></div>
          <div><a href="#">Support</a></div>
          <div><a id="naam" href="/login.html">Sign In</a></div>
          <div><a href="/signup.html">Sign up</a></div>
        </div>
      </div>
    </div>`
}
export default navbar;