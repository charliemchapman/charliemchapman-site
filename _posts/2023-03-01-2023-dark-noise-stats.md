---
title: "Dark Noise Analytics: March 2023"
date: "2023-03-01"
image: "/assets/images/dark-noise-app-icon-cropped.png"
---

I recently added some analytics into [Dark Noise](https://darknoise.app/) using the new(ish) privacy-focused analytics tool [TelemetryDeck](https://telemetrydeck.com/) in preparation for my big update that will be adding a free tier. I want to get an understanding of how many users I might be dealing with going forward and some of my future plans lead me to want to understand what features, and sounds users are using most within the app.

It's been a couple of months now so I have enough data to share some metrics with you all. I think it might be fun to see what changes when I switch to a subscription business model with a free tier. As always, this is meant to be helpful! I don't know if these numbers are higher than average, or lower than average. This is just one data point that's hopefully helpful to see, especially for other indie developers.

Alright, let's start with the high-level stuff.

![Dark Noise 2023 Stats Overview](/assets/posts/2023/03/01/dark-noise-stats-2023-overview.jpg)

It's only been a couple of months, but so far **Monthly Active Users** have hovered right around **11,000 to 12,000** unique users. For reference, App Store Connect's "Active Last 30 Days" analytics (which are limited to only users who opt-in) shows 4,300 users.

The **Daily Active Users** is surprisingly consistent at around **2,300 to 2,500** unique users.

![Dark Noise 2023 Stats Hourly Active Users](/assets/posts/2023/03/01/dark-noise-stats-2023-hourly-active.jpg)

The **Hourly Active Users** very clearly show peaks around nighttime in North America with a smaller peak in the morning confirming my assumption that a large portion of users are probably playing these sounds to go to sleep. The smaller peak in the morning is most likely because most people pause the app in the background or use the timer feature to automatically stop the sound.

## Device Info

![Dark Noise 2023 Stats Device Info](/assets/posts/2023/03/01/dark-noise-stats-2023-device-info.jpg)

Looking at device info, about **1/5th** of sessions came from **Macs vs iOS** which I have to admit surprised me to be that high. Good to keep in mind that the Mac does represent a significant portion of my app's use.

A little over **90%** of sessions came from the **latest iOS 16 or macOS 13**. This will be interesting to watch as I add a free tier. I think there's a chance that a more accessible app will get a higher adoption among the less tech-enthusiast crowd which may actually increase the percentage of users I have on older OSs. Also, hello there iOS 17! 👋

## Noise Play Counts

![Dark Noise 2023 Stats Device Info](/assets/posts/2023/03/01/dark-noise-stats-2023-noise-bar.jpg)

![Dark Noise 2023 Stats Noise Count Donut](/assets/posts/2023/03/01/dark-noise-stats-2023-noise-donut.jpg)

Wow... Brown Noise is king apparently 😅.

I expected some popular sounds and then a long tail, but I definitely didn't expect Brown Noise to be that dominant. It's cool to see custom mixes are very popular though. I get a lot of positive feedback about that feature, but I always wondered how popular it was to use by most people.

# Extras

![Dark Noise 2023 Stats Extras](/assets/posts/2023/03/01/dark-noise-stats-2023-extras.jpg)

Here are a couple of extra metrics I found interesting. There's not a lot to analyze here other than it's nice to have confirmation people really are using these features.

# Wrap Up

I'm definitely glad I finally added some light analytics back in the app. I think this will be really helpful in guiding decisions on what features or sounds I should focus on going forward. And while TelemetryDeck is still a little young and rough around the edges, I feel confident in that team's focus on privacy. And even in the short few months I've been using it they've dramatically improved the reporting UI.

Hopefully, this is helpful for you all! At the very least I think it'll be an interesting data point to look back on in a few months after my update to subscriptions and having a free tier. As always, if you have any questions or comments I'd love to hear them on [Mastodon](https://mastodon.social/@charliemchapman) or [Twitter](https://twitter.com/_chuckyc).