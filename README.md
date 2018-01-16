Demo host app for the [Box Content Preview UI Element](https://developer.box.com/docs/box-content-preview)
==========================================================================================================

**This demo app demonstrates how to use the Box Content Preview UI Element from within a React based application. The UI Elements require an access token to work. This demo however does not demonstrate how to do authentication in your app. For authentication and generating tokens please follow https://developer.box.com/docs/authentication instead.**

Setup
-----
1. Clone this repo via `git clone git@github.com:box/box-content-preview-demo.git`.
2. Add auth token to [src/index.js].
3. Run `yarn deploy` to run the webpack dev server.
4. Navigate to http://localhost:8080.

**Note: The above instruction steps assume webpack dev server is running on port 8080. If it runs on another port, you will have use that instead in the instructions above.**

Important Files
---------------
[How to import the Preview UI Element - index.js](src/index.js)
[Webpack rules - webpack.config.js](webpack.config.js)
[Babel config - .babelrc](.babelrc)
[Packages and dependencies - package.json](package.json)

# Questions
If you have any questions, please visit our [developer forum](https://community.box.com/t5/Box-Developer-Forum/bd-p/DeveloperForum) or contact us via one of our [available support channels](https://community.box.com/t5/Community/ct-p/English).

# Copyright and License
Copyright 2016-present Box, Inc. All Rights Reserved.

Licensed under the Box Software License Agreement v.20170516.
You may not use this file except in compliance with the License.
You may obtain a copy of the License at

   https://developer.box.com/docs/box-sdk-license

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
