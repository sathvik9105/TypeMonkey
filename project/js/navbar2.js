class SpecialHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav class="navbar navbar-inverse" style="background-color: rgba(0, 0, 0, 0.6);">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <a class="navbar-brand" href="#" style="color: yellow;">TypeMonkey</a>
                    </div>
                    <ul class="nav navbar-nav">
                        <li class="active"><a href="/project/index2.html">Home</a></li>
                        <li><a href="https://github.com/sathvik9105/TypeMonkey" target="_blank">About</a></li>
                        <li><a href="https://www.typingclub.com/sportal/program-3.game" target="_blank">Tutorial</a></li>
                        <li><a href="https://thetypingcat.com/typing-games" target="_blank">Games</a></li>
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                        <li><a href="/project/index.html" id="logout">
                            <span class="glyphicon glyphicon-log-in"></span> Logout</a>
                        </li>
                    </ul>
                </div>
            </nav>
        `;
    }
}

customElements.define('special-header', SpecialHeader);
