> Goals

- Create Among Korruption website

  - | Page               | Feature                                                                      |
    | ------------------ | ---------------------------------------------------------------------------- |
    | Merchandise        | Brand labeled items store                                                    |
    | Biography          | Introduction with facts and wikipedia intro                                  |
    | Discography / Blog | Track listings in chronological order and current news                       |
    | Gallery            | Album from/ to Instagram, Facebook, any other social media platform as album |

    **Scroll down to notes for more details**

- Create a management interface

  - Post merchandise
  - Update merchandise
  - Delete merchandise
  - Get merchandise orders
    - (❓ Fufill merchandise orders)
  - Post to SoundCloud
    - Manage SoundCloud profile
  - Post biography
  - Post blog entries
  - Update blog entries
  - Delete blog entries
  - Update biography
  - Post pictures
  - Delete pictures

> Stretch Goals

- Upkeep AK Wikipedia, Facebook, Instagram with website info
  - (❓ Manual data entry for non developer role)

# 🎧\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_🎧\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_🎧

> Notes

- ~~Data access to social media activity tied to one account~~

- Maintaining/ updating website after completion

- ~~Custom website name and domain~~

---

## Page: Merchandise

- This will be a proprietary merch store like application where any user can shop for brand labeled things.

### Back

- Pull merch from {google photos/ instagram} and load to page:
  - On load query:
    - merch item {#, name, id} query:
      - price
      - description
- Update authenticated users cart with merch:
  - On add to cart mutation update:
    - user cart item id
      - user cart item quantity
      - user cart item price

** I have a cart instance <br/>
** Authenticated guest to keep track of purchases {with facebook login/ jws login token from verified credentials} <br/>

### Front

- img:
  - merchandise
    - div:
      - price
      - description
    - button:
      - add to cart
      - quantity to add to cart
        - div:
          - quantity

---

## Page: Biography

> About page for AK

---

## Page: Discography + Blog (Social media hub)

> Tracks should exist in the cloud in multiple streaming services like SoundCloud and Youtube Music. These tracks will be featured using API integration on the website.

> This section can contain a text area with locally hosted content or embedded content from other sites. Should have a comments section if guests are authenticated through Facebook for example.

### Back

- On page load
  - Query feedSC for playlist
    - Get tracks
      - SC id
      - title
      - artwork
  - Pull twitter api
- On scroll to pics tag
  - Pull instagram api
- On scroll to blog tag
  - pull from database

### Front

- ul:
  - li:
    - tracks
      - img:
        - track pic
      - div:
        - title
      - img:
        - play/ pause button with event trigger
- ul:
  - li:
    - img:
      - instagram pic
- ul:
  - li:
    - div:
      - twitter tweet
- ul:
  - li:
    - div:
      - blog
        - h1:
          - title
        - h2:
          - date
        - p:
          - description

\*\* Instagram (horizontal), Twitter (vertical), Soundcloud (vertical)) feed + Blog post feed

---

## Page: Gallery

> Should display an album that enlarge pictures when mouse hoovers over them or are tapped.

# 🎧\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_🎧\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_🎧

Web development ideas and points. <br />
• Merch, Includes shirts, hoodies, hats and stickers with photo representation. Would like to have items with multiple photos that can be clicked to the next photos. Also includes a link that can be used as a ‘add to cart' function.✔️<br />
• Discography, Links to soundcloud https://soundcloud.com/seth-monroy . Would like to enable guests to streaming music on site with track list and playlists. Blog with photos from Instagram allowing guests to scroll my photos (https://www.instagram.com/lit_like_seth/ ) . Blank space for creating personal blog texts in page. Twitter page with posts display ( https://twitter.com/SethMonroy ). Needs to be easy to update posts regularly or at a live pace.✔️<br />
• Gallery, Includes portfolio like photo albums grid view. Some photos may include photos with models with merch, my idea is to link the certain photos with the merch page, a button like feature to be clicked in order to open the merch page.<br />
• Bio/ about me / FAQ’s within another page. Bio can be hand written and is currently under revisions.<br />
• Would be maintained by me for non developers.<br />
• Specific page for pricing for “mixing and mastering” reference page ; http://www.breweryrecording.com/mixing.html<br />
• 24 and 48 track mix/master selections only.<br />

# 🎧\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_🎧\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_🎧

> Bugs

- add link to index.html after each develop

< link
rel="stylesheet"
href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
crossorigin="anonymous"
/>

# 🎧\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_🎧\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_🎧

| Stack        |
| ------------ |
| React        |
| Gatsby       |
| Bootstrap    |
| GraphQL      |
| Apollo       |
| graphql-yoga |
| Heroku       |