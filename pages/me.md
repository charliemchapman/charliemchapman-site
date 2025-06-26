---
layout: me
title: Me
image: "/assets/images/charlie-profile-2023.jpg"
---

<script>
    function copyHandle(handle, buttonId) {
        var originalText = document.getElementById(buttonId).innerHTML

        navigator.clipboard.writeText(handle)
        var copiedCopy = "Copied!"
        document.getElementById(buttonId).innerHTML = copiedCopy;

        if (originalText != copiedCopy) {
            setTimeout(() => { 
                document.getElementById(buttonId).innerHTML = originalText;
            }, 3000);
        }
    }
</script>

<div class="me-header">
    <div class="me-header-content">
        <div class="me-image">
            <img src="/assets/images/charlie-profile-2023.jpg" />
        </div>
    </div>
</div>

<div class="me-content">
    <h1>Charlie Chapman</h1>
    <p class="me-bio">
        Developer Advocate at <a href="https://revenuecat.com">@RevenueCat</a>, indie iOS developer building <a href="https://darknoise.app">@DarkNoise</a>, host of the <a href="https://launchedfm.com">@Launched</a> podcast, and organizer of <a href="https://stlswift.com/">@STLSwift</a>.
    </p>
    <h2>Social</h2>
    <div class="me-link">
        <div>
            <div class="me-link-header">
                <img src="/assets/images/linkedin-icon.svg">
                <h3>LinkedIn</h3>
            </div>
            <p>
                <a href="https://www.linkedin.com/in/charliemchapman/">
                    linkedin.com/in/charliemchapman
                </a>
            </p>
        </div>
    </div>
    <div class="me-link">
        <div>
            <div class="me-link-header">
                <img src="/assets/images/twitter-logo.png">
                <h3>Twitter</h3>
            </div>
            <p>
                <a href="https://twitter.com/_chuckyc">
                    @_chuckyc
                </a>
                <button id="twitter-handle-button" onclick="copyHandle('@_chuckyc', 'twitter-handle-button')">
                    Copy
                </button>
            </p>
        </div>
    </div>
    <div class="me-link">
        <div>
            <div class="me-link-header">
                <img src="/assets/images/bluesky-icon.svg">
                <h3>BlueSky</h3>
            </div>
            <p>
                <a href="https://bsky.app/profile/charliemchapman.com">
                    @charliemchapman.com
                </a>
                <button id="bluesky-handle-button" onclick="copyHandle('@charliemchapman.com', 'bluesky-handle-button')">
                    Copy
                </button>
            </p>
        </div>
    </div>
    <div class="me-link">
        <div>
            <div class="me-link-header">
                <img src="/assets/images/mastodon-icon.png">
                <h3>Mastodon</h3>
            </div>
            <p>
                <a href="https://mastodon.social/@charliemchapman">
                    @charliemchapman@mastodon.social
                </a>
                <button id="mastodon-handle-button" onclick="copyHandle('@charliemchapman@mastodon.social', 'mastodon-handle-button')">
                    Copy
                </button>
            </p>
        </div>
    </div>
    <div class="me-link">
        <div>
            <div class="me-link-header">
                <img src="/assets/images/threads-icon.png">
                <h3>Threads</h3>
            </div>
            <p>
                <a href="https://www.threads.net/@charliemchapman">
                    @charliemchapman
                </a>
                <button id="threads-handle-button" onclick="copyHandle('@charliemchapman', 'threads-handle-button')">
                    Copy
                </button>
            </p>
        </div>
    </div>
    <h2>Projects</h2>
    <div class="me-link">
        <div>
            <div class="me-link-header">
                <h3>Dark Noise (App)</h3>
            </div>
            <p>
                <a href="https://darknoise.app">
                    darknoise.app
                </a>
            </p>
        </div>
    </div>
    <div class="me-link">
        <div>
            <div class="me-link-header">
                <h3>Framous (App)</h3>
            </div>
            <p>
                <a href="https://darknoise.app">
                    framous.app
                </a>
            </p>
        </div>
    </div>
    <div class="me-link">
        <div>
            <div class="me-link-header">
                <h3>Launched (Podcast)</h3>
            </div>
            <p>
                <a href="https://launchedfm.com">
                    launchedfm.com
                </a>
            </p>
        </div>
    </div>
    <div class="me-link">
        <div>
            <div class="me-link-header">
                <h3>Organizer of STL Swift (Meetup)</h3>
            </div>
            <p>
                <a href="https://stlswift.com/">
                    https://stlswift.com/
                </a>
            </p>
        </div>
    </div>
    <div class="me-link">
        <div>
            <div class="me-link-header">
                <h3>Blog</h3>
            </div>
            <p>
                <a href="https://charliemchapman.com/">
                    charliemchapman.com
                </a>
            </p>
        </div>
    </div>
    <div class="bottom-spacer"/>
</div>