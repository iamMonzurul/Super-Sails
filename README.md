# Super Sails
__Boilerplate code for a MEAN stack application using [Sails.js](http://sailsjs.org)__

Sails.js takes a bit of finagling to get it to play nicely with Angular, so I put together
this repo as a starting point for my future projects so I don't have to go through the same
pain again (ok... it's not that bad...).

### What I've messed with:
- Jade for client-side templates, compiled into a JST.js template file
- Pass-through routing for Angular
- Stylus instead of LESS
- Configure default connections
  - Redis for sessions & sockets
  - MongoDB for data
- Prefixing blueprint routes with `/api`
- Load Angular via CDN
- Set up basic Angular scaffold
- Enabled Fastclick.js
- Set up Bower for client-side dependencies
- Added .foreverignore

### Things to note
- Assets should be injected automatically, except those installed with Bower -- those should be added in `tasks/pipeline.js`
- Existing code is written in Coffeescript, but you can just as easily write JS without changing anything

I also like to run `git --assume-unchaged views/linker/*.jade` to keep pointless diffs out of my repo
while maintaining the ability to use `git add -A` or `git commit -a` when I can.