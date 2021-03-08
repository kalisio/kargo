### 0.13.0 (2021-03-08)

##### New Features

*  Remove setup-worker script (close [#206](https://github.com/kalisio/kargo/pull/206)) ([a72f1c0c](https://github.com/kalisio/kargo/commit/a72f1c0cbd3a52a11011a8c1bfc3b4c3a942dbbc))
*  Add a way to specify deploy constraints from the .env file [close [#226](https://github.com/kalisio/kargo/pull/226)] ([33d8a5e3](https://github.com/kalisio/kargo/commit/33d8a5e32e4362f7d6e3d581073ec62f9262b3b3))
*  Allow to specify postgis db name using env vars. [skip doc] [skip build] ([8ecd7729](https://github.com/kalisio/kargo/commit/8ecd772949573e89b373f8df4577ffb3b4c929d4))
*  add total swap to cluster dashboard + autorefresh every minute. [skip build] [skip doc] ([22c17eba](https://github.com/kalisio/kargo/commit/22cA7ebaddffba8ae74e2032c7dd1251dbddcbdb))
*  Add swap usage to cluster dashboard. ([aad1bb4b](https://github.com/kalisio/kargo/commit/aad1bb4b47c8584713678a37c4204fc39470c138))
*  Add configuration variable to limit mongors available memory (close [#221](https://github.com/kalisio/kargo/pull/221)) ([7ff619bd](https://github.com/kalisio/kargo/commit/7ff619bdcfbfb7daab9c3fef0f4d3696fc172707))
*  Add max/avg load & cpu usage to cluster dashboard. ([aa4e59dc](https://github.com/kalisio/kargo/commit/aa4e59dca51e007a822b8aaf5e2f8eeacd988fc6))
*  Drop image archives support (close [#219](https://github.com/kalisio/kargo/pull/219) ) ([b5044d27](https://github.com/kalisio/kargo/commit/b5044d27fbe9bc41faee1fe01a3e4cc56bcd97b4))

##### Bug Fixes

*  Fixed deploy constraint yaml extension generation. ([96238f3b](https://github.com/kalisio/kargo/commit/96238f3b2b4f7e930be874dad1e9eaedee32665d))
*  properly normalize deploy constraint env var name generation. ([19c5d90d](https://github.com/kalisio/kargo/commit/19c5d90dac6e4fbff6b1f9065377788566a8c0ff))
*  Tileservergl deploy constraint rely on tileservergl label only. ([18397e98](https://github.com/kalisio/kargo/commit/18397e9845bea5fd3c2c8435d1a3e18e2033b622))
*  Upgraded Vigicrues job to v1.4 (closes [#224](https://github.com/kalisio/kargo/pull/224)) ([454dad1a](https://github.com/kalisio/kargo/commit/454dad1a3303e5231cc29a825ac7cdce5ca2c0b6))
*  Grafana must be able to reach prometheus on kargo-back-network. ([b093edb3](https://github.com/kalisio/kargo/commit/b093edb35d4e4423d44165ad5369bd1acac4f5b9))

### 0.12.0 (2020-12-14)

##### New Features

*  Do not expose anymore prometheus and alertmanager (close [#214](https://github.com/kalisio/kargo/pull/214)) ([8604e6c6](https://github.com/kalisio/kargo/commit/8604e6c631e96a886419ddc162cad746b3e73e75))
*  Ports should be exposed using long syntax (close [#216](https://github.com/kalisio/kargo/pull/216)) ([3a542682](https://github.com/kalisio/kargo/commit/3a542682bcda88a843198b8e8e7caf74598dd588))
*  add machine hostname to cluster dashboard (close [#213](https://github.com/kalisio/kargo/pull/213)) ([b2650a58](https://github.com/kalisio/kargo/commit/b2650a5887c4f8bd84dd3045219d4f9d46ea9d16))
*  add placement constraint for weacast loaders (close [#212](https://github.com/kalisio/kargo/pull/212)) ([aa5ad71b](https://github.com/kalisio/kargo/commit/aa5ad71baa9e478548a77ea11d8e3d39af3a5e89))
*  Add support for MariaDB (close [#202](https://github.com/kalisio/kargo/pull/202)) ([48e4f78d](https://github.com/kalisio/kargo/commit/48e4f78defb475a511e4448aabf92d66a4ffacf6))
*  Allow to override the name of the mongors services (close [#207](https://github.com/kalisio/kargo/pull/207)) ([55193452](https://github.com/kalisio/kargo/commit/55193452502d04d02ec41ca760638d07e762a04f))
*  Allow to define the prometheus targets (close [#209](https://github.com/kalisio/kargo/pull/209)) ([16e563ba](https://github.com/kalisio/kargo/commit/16e563baaba78e994c69f679e982939b5ce425ef))
*  Upgrade compose files version to 3.8 (close 3.8) [skip ci] ([7cd4afd2](https://github.com/kalisio/kargo/commit/7cd4afd26b27c9dad25f8cad8dbe572a4e58d9b5))
*  template mongors exporter too. ([efe77bfd](https://github.com/kalisio/kargo/commit/efe77bfd832fe74f9eef531d097bf07d1762b245))
*  Allows to execute before/after hooks when deploying a service (close [#204](https://github.com/kalisio/kargo/pull/204)) [skip build] ([d4eff2bb](https://github.com/kalisio/kargo/commit/d4eff2bb63a216f987701d52a28bd26c29379482))
*  Distinguish a back and front docker network (cloe [#205](https://github.com/kalisio/kargo/pull/205)) ([9af5d43b](https://github.com/kalisio/kargo/commit/9af5d43b1a546afa5eed35760426b64ea487bad9))
*  use a smooth mask for ign bdortho/orthohr imagery. ([f6ddbc80](https://github.com/kalisio/kargo/commit/f6ddbc802f36489f5ab2c05f48c400ed122746ab))
*  make mongo exporter collect stats on collections. ([69060bca](https://github.com/kalisio/kargo/commit/69060bcafd948ec5ad9c1c0739cf011136a856b6))
*  stop exposing alertmanager. ([0b6230d0](https://github.com/kalisio/kargo/commit/0b6230d0663567156fed501048b11dd963356ca2))
*  include infra's name in alertmanager alerts (close [#198](https://github.com/kalisio/kargo/pull/198)). ([e940738c](https://github.com/kalisio/kargo/commit/e940738cefdfaac43ad92f2f6e9312d1c8924f6a))
*  Added dedicated S3 environment variables for weacast loaders closes https://github.com/kalisio/kargo/issues/199 ([a0a8cef0](https://github.com/kalisio/kargo/commit/a0a8cef0a82cf401b14fae1d81461b23d080d9cd))
*  include infra's name in krawler's healthcheck message. ([c749ffd9](https://github.com/kalisio/kargo/commit/c749ffd9c3880354b498d1415d3df4ca2d03f517))
*  Enhance CLI functionalities (close [#188](https://github.com/kalisio/kargo/pull/188)) ([b8048be6](https://github.com/kalisio/kargo/commit/b8048be6829651d3f5b4f75c7579ea370347f3e1))
*  Integrate the OpenRadiation job (close [#196](https://github.com/kalisio/kargo/pull/196)) ([5737ccd6](https://github.com/kalisio/kargo/commit/5737ccd61db1b715507ce20a3e60145a6c4b6f88))
*  Integrate the OpenRadiation job [#196](https://github.com/kalisio/kargo/pull/196) ([1d17c36f](https://github.com/kalisio/kargo/commit/1d17c36f5e4e440b0b2b57f6abe26005e0d8a545))

##### Bug Fixes

*  MAPCACHE_REPLICAS is missing in .env.default (close [#218](https://github.com/kalisio/kargo/pull/218)) ([5f37efa2](https://github.com/kalisio/kargo/commit/5f37efa2c0ef5b7318880950ddf2c680a60510d4))
*  Registry is no more working (close [#215](https://github.com/kalisio/kargo/pull/215)) ([bfa729c0](https://github.com/kalisio/kargo/commit/bfa729c0b67481b2f2c30ca05c19e981b2a1542f))
*  wrong kargo network ([09556b35](https://github.com/kalisio/kargo/commit/09556b3567482f9212c193d61020100037db9f27))
*  added missing MONGORS default values [skip ci] ([7eafd5d0](https://github.com/kalisio/kargo/commit/7eafd5d0107fa4c0abee0214c2de923c67b958cb))
*  Traefik does not startup (close [#203](https://github.com/kalisio/kargo/pull/203)) ([52b7e5ab](https://github.com/kalisio/kargo/commit/52b7e5ab4e5c7f0caf6c23a978a360f3b5ef08e4))
*  prevent alertmanager from adding a link to alertmanager. in slack messages. ([bdd0a147](https://github.com/kalisio/kargo/commit/bdd0a1477c301646e54f28bc53812db855b0fbf9))

##### Other Changes

*  Do not expose anymore prometheus and alertmanager [#214](https://github.com/kalisio/kargo/pull/214) ([194f3978](https://github.com/kalisio/kargo/commit/194f39786ae1a2381ba5ac6ca4eaec8e2e556550))
*  Add support for MariaDB [#202](https://github.com/kalisio/kargo/pull/202) [skip ci] ([a3cc7bd7](https://github.com/kalisio/kargo/commit/a3cc7bd7e957b4b84064b86ed24e07167026f442))
*  Add support for MariaDB [#202](https://github.com/kalisio/kargo/pull/202) [skip ci] ([67e7b965](https://github.com/kalisio/kargo/commit/67e7b9655a65ea9d992086cc71a6b620ea11c4bf))
*  Add support for MariaDB [#202](https://github.com/kalisio/kargo/pull/202) [skip ci] ([d5dc5648](https://github.com/kalisio/kargo/commit/d5dc56481c218eabf3f421e590362387fed29ace))
*  Add support for MariaDB [#202](https://github.com/kalisio/kargo/pull/202) [skip ci] ([524b24ab](https://github.com/kalisio/kargo/commit/524b24abee7d280b308956d1cc402eb45f364af1))
*  Add support for MariaDB [#202](https://github.com/kalisio/kargo/pull/202) ([e12b1a7e](https://github.com/kalisio/kargo/commit/e12b1a7e7da2b0d3416becad053b85a2cda3d60a))
*  Add support for MariaDB [#202](https://github.com/kalisio/kargo/pull/202) [skip ci] ([02399f1e](https://github.com/kalisio/kargo/commit/02399f1e6bffc81eab42a761364eb519fdeb6b5b))
*  Add support for MariaDB [#202](https://github.com/kalisio/kargo/pull/202) [skip ci] ([7d53b971](https://github.com/kalisio/kargo/commit/7d53b971ce00ffdd7af3f377c631a53e675a789d))
*  Add support for MariaDB [#202](https://github.com/kalisio/kargo/pull/202) [skip ci] ([fe0a8f4c](https://github.com/kalisio/kargo/commit/fe0a8f4c31c68fe2052e3df7e2ff86ada9aa8f5c))
*  Add support for MariaDB [#202](https://github.com/kalisio/kargo/pull/202) [skip ci] ([04da4dd9](https://github.com/kalisio/kargo/commit/04da4dd999c2aa25b134bcadcf66c909a4d074f2))
*  Add support for MariaDB [#202](https://github.com/kalisio/kargo/pull/202) [skip ci] ([9eeef9f8](https://github.com/kalisio/kargo/commit/9eeef9f8250f97cfce96ed26623bc273e5d0d8e3))
*  Allow to define the prometheus targets [#209](https://github.com/kalisio/kargo/pull/209) ([b693cbeb](https://github.com/kalisio/kargo/commit/b693cbeb4b7690d7d6e5cb4b1f940d987e86562b))
*  Allow to define the prometheus targets [#209](https://github.com/kalisio/kargo/pull/209) [skip ci] ([4c5d27e0](https://github.com/kalisio/kargo/commit/4c5d27e0d399c0a50f231c732b0740acdf205e5d))
*  Allow to define the prometheus targets [#209](https://github.com/kalisio/kargo/pull/209) feat: Upgrade compose files version to 3.8 (close [#208](https://github.com/kalisio/kargo/pull/208)) [skip ci] ([af570b2b](https://github.com/kalisio/kargo/commit/af570b2b752fb79d4c366e49498cc90b8bd57c16))
*  Allow to define the prometheus targets [#209](https://github.com/kalisio/kargo/pull/209) [skip ci] ([a83a2683](https://github.com/kalisio/kargo/commit/a83a2683fbbb0b849ecc7f5d516898b7b28a5ae6))
*  Allow to define the prometheus targets [#209](https://github.com/kalisio/kargo/pull/209) [skip ci] ([20bcd68a](https://github.com/kalisio/kargo/commit/20bcd68a4e6136253bb0cb66dbe70fe3f6ebc889))
*  Allow to override the name of the mongors services [#207](https://github.com/kalisio/kargo/pull/207) [skip build] ([f0e7e3b6](https://github.com/kalisio/kargo/commit/f0e7e3b6b698ef5106939dc5d841788d09ba879c))
*  Allow to override the name of the mongors services [#207](https://github.com/kalisio/kargo/pull/207) [skip ci] ([24af5855](https://github.com/kalisio/kargo/commit/24af5855c62e7ad775430826f2491bfafd247bc7))
*  Allow to override the name of the mongors services [#207](https://github.com/kalisio/kargo/pull/207) [skip ci] ([38875a43](https://github.com/kalisio/kargo/commit/38875a431313be8c4523afe6d2aed39cda0bd053))
*  Allow to override the name of the mongors services [#207](https://github.com/kalisio/kargo/pull/207) [skip ci] ([f34f5b68](https://github.com/kalisio/kargo/commit/f34f5b68862d68d67850aadcdc62464517b97abc))
*  Allow to override the name of the mongors services [#207](https://github.com/kalisio/kargo/pull/207) [skip ci] ([3e6f8cb4](https://github.com/kalisio/kargo/commit/3e6f8cb4c450c2a1643de57aeba198853a20da7a))
*  Allow to override the name of the mongors services [#207](https://github.com/kalisio/kargo/pull/207) [skip ci] ([c0495167](https://github.com/kalisio/kargo/commit/c04951673e02878c9d83850de0586b935566b522))
*  Allows to execute before/after hooks when deploying a service [#204](https://github.com/kalisio/kargo/pull/204) [skip ci] ([7089ee02](https://github.com/kalisio/kargo/commit/7089ee02c2e06adef09e4a8c6c5bcd2586ad7d89))
*  Allows to execute before/after hooks when deploying a service [#204](https://github.com/kalisio/kargo/pull/204) [sip ci] ([7d8776b0](https://github.com/kalisio/kargo/commit/7d8776b0327d214a50f91b9f87cf67d6090e9e7b))
*  Allows to execute before/after hooks when deploying a service [#204](https://github.com/kalisio/kargo/pull/204) [sip ci] ([eec36768](https://github.com/kalisio/kargo/commit/eec36768d97d4d55b1ab22b3d99a7c338bc518d8))
*  Allows to execute before/after hooks when deploying a service [#204](https://github.com/kalisio/kargo/pull/204) [sip ci] ([cd746d1c](https://github.com/kalisio/kargo/commit/cd746d1ce8af599408ba69433d8b91c7615e5236))
*  Allows to execute before/after hooks when deploying a service [#204](https://github.com/kalisio/kargo/pull/204) [sip ci] ([1f2b63dc](https://github.com/kalisio/kargo/commit/1f2b63dcbcc81145ad1310b65aa0a2f301986847))
*  Allows to execute before/after hooks when deploying a service [#204](https://github.com/kalisio/kargo/pull/204) [sip ci] ([430c95ed](https://github.com/kalisio/kargo/commit/430c95ed4da996b12b57b040d75cbc4aa23ccbbb))
*  Allows to execute before/after hooks when deploying a service [#204](https://github.com/kalisio/kargo/pull/204) [skip ci] ([f61d11dc](https://github.com/kalisio/kargo/commit/f61d11dcb3be9c22267337846b8b436bcc5df868))
*  Distinguish a back and front docker network [#205](https://github.com/kalisio/kargo/pull/205) ([b34ecb3c](https://github.com/kalisio/kargo/commit/b34ecb3c643e8d134a05d4566f27710695e6961c))
*  Distinguish a back and front docker network [#205](https://github.com/kalisio/kargo/pull/205) ([800df8ee](https://github.com/kalisio/kargo/commit/800df8ee5859abab74498cda501dc3f74433649f))
*  po_france0s3 is now po_monde0s3 ([61ae4f3d](https://github.com/kalisio/kargo/commit/61ae4f3d47e6fd7c601106e182311d64fab1ad62))
*  include subdomain in slack message from alertmanager. ([08f0adc4](https://github.com/kalisio/kargo/commit/08f0adc4e55b227d0497a931255c8b23409bf79c))
*  default values for mongodb exporter. ([ec6f4231](https://github.com/kalisio/kargo/commit/ec6f4231d008eefb081104b410de0993ec05c4b7))
*  mongodb prometheus exporter deploy extensions in kargo. ([ff6c4059](https://github.com/kalisio/kargo/commit/ff6c40594ff0270ab17fa359fa7cfa13d0a758c3))
*  mongodb prometheus exporter. ([d58935f8](https://github.com/kalisio/kargo/commit/d58935f80af489b978796cbfdb40120cd1e37808))
*  SUBDOMAIN instead of INFRA in failure message + portainer.SUBDOMAIN -> alertmanager.SUBDOMAIN. ([e0775289](https://github.com/kalisio/kargo/commit/e0775289ded4ebfc9a188830907ccbbf9811b653))
*  Enhance CLI functionalities [#188](https://github.com/kalisio/kargo/pull/188) ([228aaab8](https://github.com/kalisio/kargo/commit/228aaab8786b87bd7f1312a4629d8d7841ea0f28))
*  Enhance CLI functionalities [#188](https://github.com/kalisio/kargo/pull/188) ([3d4f0d78](https://github.com/kalisio/kargo/commit/3d4f0d7819c275aa8f264214923451cea75dad4c))
*  Enhance CLI functionalities [#188](https://github.com/kalisio/kargo/pull/188) ([6148da4e](https://github.com/kalisio/kargo/commit/6148da4e73bdf2142de44bfd77fcf20506571941))
*  Enhance CLI functionalities [#188](https://github.com/kalisio/kargo/pull/188) [skip ci] ([4811b650](https://github.com/kalisio/kargo/commit/4811b650e06ccc3d8dd6eeb6993b441793cd3b3c))
*  add mongodb-exporter scrape job to prometheus. ([30e04636](https://github.com/kalisio/kargo/commit/30e046362475621898967cfcc3067488b5654543))
*  fix build context for local builds. ([cf2fa611](https://github.com/kalisio/kargo/commit/cf2fa611c09a1f7093f606ca0a361cc22b838855))
*  debugging build of express-gateway docker image. ([6060401c](https://github.com/kalisio/kargo/commit/6060401c13773ff9bd5a50fc6f73d196a931282b))
*  debugging build of mongodb-exporter docker image. ([be873675](https://github.com/kalisio/kargo/commit/be873675d8d6b78e158479acde502235c059478d))
*  debugging build of mongodb-exporter docker image. ([cce6f3ac](https://github.com/kalisio/kargo/commit/cce6f3ac3234a95cb57b589e683c393117ec1320))
*  adding build of mongodb-exporter docker image. ([c9fa7f62](https://github.com/kalisio/kargo/commit/c9fa7f62c023a26c98a4796cc588bc65ff441816))

### 0.11.0 (2020-11-13)

##### New Features

*  Provide a Mongors service that helps setting up a MongoDB Replica Set [#178](https://github.com/kalisio/kargo/pull/178) ([f9e67387](https://github.com/kalisio/kargo/commit/f9e6738776fbd19d3623eaf3caac358724270023))
*  Provide a gui to administrate Postgis (close [#195](https://github.com/kalisio/kargo/pull/195)) ([e75c9a7a](https://github.com/kalisio/kargo/commit/e75c9a7afff5ab8e5ad0984b3e2f30864a44224c))
*  remove worker constraint on mongo ([22267e6f](https://github.com/kalisio/kargo/commit/22267e6fed04be88ebd77a39beef208015d7eef3))
*  Update postgis service (close [#192](https://github.com/kalisio/kargo/pull/192)) ([5f426712](https://github.com/kalisio/kargo/commit/5f4267121552243dc6f8b0b759367ae9ec4df2df))
*  Update postgis service (close [#192](https://github.com/kalisio/kargo/pull/192)) ([2ab05eb3](https://github.com/kalisio/kargo/commit/2ab05eb36153fcc91570885271e143907457b12c))
*  Allow to use additional registries (close [#96](https://github.com/kalisio/kargo/pull/96)) ([6c2015ea](https://github.com/kalisio/kargo/commit/6c2015ea35b5434061776adc75bad5eb55b31aaf))
*  Allow to provide any options of the mapcache seeder when using the seed-cache script (close [#191](https://github.com/kalisio/kargo/pull/191)) ([3f98d2b0](https://github.com/kalisio/kargo/commit/3f98d2b037235cdd33ed2404ba0f0998bb590065))
*  Allow to configure the Tomcat uid and gid of Thredds (close [#190](https://github.com/kalisio/kargo/pull/190)) ([f62c9663](https://github.com/kalisio/kargo/commit/f62c96630ea4a9b5c3d89a2856e06c1835b01be3))
*  added solution to manage logs closes https://github.com/kalisio/kargo/issues/187 ([90ba158c](https://github.com/kalisio/kargo/commit/90ba158c50e68dea85246efe4e29019c3be95c20))
*  Remove deprecated seeder service (close [#189](https://github.com/kalisio/kargo/pull/189)) ([20ac9dba](https://github.com/kalisio/kargo/commit/20ac9dba89f6c212461a1bb4bc0a8945d84e45b7))
*  Provide some scripts to seed some layers (close [#185](https://github.com/kalisio/kargo/pull/185)) ([9bfffa89](https://github.com/kalisio/kargo/commit/9bfffa89fce9e2025849e1c7197c91e9761e18ed))
*  Bump Weacast loaders to version 1.4.2 (close [#186](https://github.com/kalisio/kargo/pull/186)) ([1f0b1cd4](https://github.com/kalisio/kargo/commit/1f0b1cd48f1bbfd50adc5189e7fdedff14cb5be5))
*  Provide some scripts to seed some layers [#185](https://github.com/kalisio/kargo/pull/185) ([5994d3d7](https://github.com/kalisio/kargo/commit/5994d3d7c6dec5d61061e8d3c0d53f0dae80781c))
*  Allow Exec subcommand to handle some arguments (close [#182](https://github.com/kalisio/kargo/pull/182)) ([6b95a8aa](https://github.com/kalisio/kargo/commit/6b95a8aa1512269d91f0c281b986d4a133fd1209))
*  Remove Weacast build scripts (close [#183](https://github.com/kalisio/kargo/pull/183)) wip: Allow Exec subcommand to handle some arguments [#182](https://github.com/kalisio/kargo/pull/182) ([9d331460](https://github.com/kalisio/kargo/commit/9d3314606ba71353d9ef62e9ab55ecfca58d5c93))
*  Allo to setup the UPPER_LIMIT parameter in Weacast downloaders (close [#179](https://github.com/kalisio/kargo/pull/179)) ([315d5697](https://github.com/kalisio/kargo/commit/315d569750fbe99caff251f93fc8b7f4212dc349))
*  Remove frontends definition from ows services (close [#181](https://github.com/kalisio/kargo/pull/181)) ([3048a25f](https://github.com/kalisio/kargo/commit/3048a25f24dfbb53d358883a29f4bec10bcf7341))
*  Bump to Weacast API 1.2.2 (close [#180](https://github.com/kalisio/kargo/pull/180)) ([f573e99c](https://github.com/kalisio/kargo/commit/f573e99c8f30ae70938a41a812005783ec440ef6))
*  ACME settings should be attached to Traefik (close [#177](https://github.com/kalisio/kargo/pull/177)) [skip build] chore: updated gateway template to use MapCache ([3b5e5999](https://github.com/kalisio/kargo/commit/3b5e5999bd06ea352c80cd5b231b6ff404fb2256))
*  Bump to Teleray 1.2.0 (close [#176](https://github.com/kalisio/kargo/pull/176)) feat: Bump to Hubeau 1.2.0 (close [#175](https://github.com/kalisio/kargo/pull/175)) feat: Bump to OpenAQ 1.0.0 (close [#174](https://github.com/kalisio/kargo/pull/174)) feat: Bump to Vigicrues 1.3.0 (close [#173](https://github.com/kalisio/kargo/pull/173)) ([f40b6f0e](https://github.com/kalisio/kargo/commit/f40b6f0e0da6ca6ab798a2de060307a72acf8232))
*  Bump to TileServerGL 3.0.0 (close [#170](https://github.com/kalisio/kargo/pull/170)) [skip ci] ([a609fb4a](https://github.com/kalisio/kargo/commit/a609fb4a09a101229d8d7e28500c103e466aac4d))
*  Enhance MapCache integration (close [#171](https://github.com/kalisio/kargo/pull/171)) ([b4993bd3](https://github.com/kalisio/kargo/commit/b4993bd36a290d16c5171fa5ec1c1e03ec90c93d))
*  Bump to Vigicrues 1.2.0 (close [#168](https://github.com/kalisio/kargo/pull/168)) ([d7cbae0c](https://github.com/kalisio/kargo/commit/d7cbae0ca8f6774cf75a868359a0073d3d4b76f0))
*  Allow to configure cron expression of hubeau (close [#161](https://github.com/kalisio/kargo/pull/161)) ([a85230d1](https://github.com/kalisio/kargo/commit/a85230d106b47a531ac9c74257dc513f0eb787a1))
*  Allow to configure cron expression of openAQ (close [#163](https://github.com/kalisio/kargo/pull/163)) [skip ci] ([c268c065](https://github.com/kalisio/kargo/commit/c268c065ac0e6bb29d27e00d186ace6616a9a587))
*  Allow to configure cron expression of teleray (close [#162](https://github.com/kalisio/kargo/pull/162)) [skip ci] ([de584037](https://github.com/kalisio/kargo/commit/de58403733924f9c8db02bf1467699684583e147))

##### Bug Fixes

*  API Gateway does not correctly manage multiple users (close [#194](https://github.com/kalisio/kargo/pull/194)) ([723e45ac](https://github.com/kalisio/kargo/commit/723e45ac6a9285e0225f40c931fbb6909e346f42))
*  no local cache for mapcache wmts sources (fixes [#193](https://github.com/kalisio/kargo/pull/193)). ([001bb089](https://github.com/kalisio/kargo/commit/001bb0896b95856a034db75749e798bb9e18a030))
*  Change Traefik's restart policy to any (close [#184](https://github.com/kalisio/kargo/pull/184)) ([c9505d68](https://github.com/kalisio/kargo/commit/c9505d6830009d135ed8947f1de82914954deb78))
*  broken links in doc. ([3f09b272](https://github.com/kalisio/kargo/commit/3f09b272e448fda804bd4137ae3a86a63e7093f6))
*  Getting sporadic '502 bad gateway error' (close [#136](https://github.com/kalisio/kargo/pull/136)) ([a25d7223](https://github.com/kalisio/kargo/commit/a25d7223318ed27dbecf6806f55d185de1305feb))
*  docker-socket-proxy-network set to overlay feat: Updated default MapCache data path to /var/cache/mapcache ([7f8caffe](https://github.com/kalisio/kargo/commit/7f8caffef65fb9b244dfc79022ff796816f89caa))
*  Default TileserverGL repository ([4f76c37e](https://github.com/kalisio/kargo/commit/4f76c37e479491c007bf3a4ce955b822cf3269f9))
*  Cannot pull images from private registry (close [#172](https://github.com/kalisio/kargo/pull/172)) [skip ci] ([b4931370](https://github.com/kalisio/kargo/commit/b4931370a37262305ff55e773ee128177d8f7ec5))
*  Traefik does not handle failover (close [#167](https://github.com/kalisio/kargo/pull/167)) ([3e3a60cf](https://github.com/kalisio/kargo/commit/3e3a60cffcf20ccedc56be0af047aaf125939b4c))

### 0.10.0 (2020-06-09)

##### New Features

*  Bumped Kano to version =1.0.0-prod
*  Disable Weacast loaders build (close [#158](https://github.com/kalisio/kargo/pull/158)) ([5c4376b5](https://github.com/kalisio/kargo/commit/5c4376b5c1c11e82d2efad2bdf6f3fe3ad131998))

### 0.9.0 (2020-05-09)

##### New Features

*  Allow to configure the TTL of the Teleray measurements (closed [#152](https://github.com/kalisio/kargo/pull/152)) ([31fefb29](https://github.com/kalisio/kargo/commit/31fefb299a10ecdc3557670b2b866b8bcdb1f338))
*  Add a benchmark tool and/or command (close [#98](https://github.com/kalisio/kargo/pull/98)) [skip ci] ([ddb8800a](https://github.com/kalisio/kargo/commit/ddb8800a8f29984244c33fab293eb07f965ef902))
*  Provide a tool to perform command line processing (close [#156](https://github.com/kalisio/kargo/pull/156)) ([d193948d](https://github.com/kalisio/kargo/commit/d193948d2d5b87388428ebea3d48040ea4f55121))
*  Provide a gui to MongoDB (close [#157](https://github.com/kalisio/kargo/pull/157)) ([0d319bea](https://github.com/kalisio/kargo/commit/0d319bea402e3eb3b4e2bbcd47ae37f1b2c5ce03))
*  Bump Hubeau version to 1.1.0 (close [#154](https://github.com/kalisio/kargo/pull/154)) 
*  Enhance Kano deploy file to take into account Mapillary client ID (close [#151](https://github.com/kalisio/kargo/pull/151)) ([dcf0c623](https://github.com/kalisio/kargo/commit/dcf0c623056212f6b72a92c6ae77790b4e367bc5))
*  Decrease default rare success of the hubeau-observations job (decreased to 75%) (close [#150](https://github.com/kalisio/kargo/pull/150)) ([d1d60a4f](https://github.com/kalisio/kargo/commit/d1d60a4ff0aa6b15de8025f30d59be64c340a344))

### 0.8.0 (2020-03-04)

##### New Features

*  Allow to handle labels on the nodes (close [#148](https://github.com/kalisio/kargo/pull/148)) ([312a945c](https://github.com/kalisio/kargo/commit/312a945cbbbde62e32bf626dfdb72f784bc082b2))
*  Provide a redeploy command (close [#147](https://github.com/kalisio/kargo/pull/147)) ([d348ea16](https://github.com/kalisio/kargo/commit/d348ea16d8d1a67fbaf7330ab88271dd453f2318))
*  Allow to save the image of a given service (close [#142](https://github.com/kalisio/kargo/pull/142)) ([d32dfd03](https://github.com/kalisio/kargo/commit/d32dfd031132ac2f6efe55a11c5801d84e41dc5b))

##### Bug Fixes

*  hubeau-stations env variable error ([f1bb42f1](https://github.com/kalisio/kargo/commit/f1bb42f1155cb57d1923a36239cfe33723c62c07))
*  Healthcheck of Krawler jobs fails behind a proxy (close [#143](https://github.com/kalisio/kargo/pull/143)) ([451cd1f5](https://github.com/kalisio/kargo/commit/451cd1f5bcc284840df1823c95c18cfd2cd428bc))
*  Weacast loaders do not require the constraint weacast == true anymore (close [#146](https://github.com/kalisio/kargo/pull/146)) [skip ci] ([eec9f311](https://github.com/kalisio/kargo/commit/eec9f311fa42d4ee647bbba5015ec939a33941ea))
*  Spelling error of YML files that expose HTTPS_PROXY (close [#144](https://github.com/kalisio/kargo/pull/144)) ([e6253908](https://github.com/kalisio/kargo/commit/e6253908e6a53d6d527d35a5f998eaf46b2125bf))

### 0.7.0 (2020-02-24)

##### New Features

*  Allow to execute a test script on a given service (close [#141](https://github.com/kalisio/kargo/pull/141)) ([6412cd3c](https://github.com/kalisio/kargo/commit/6412cd3c7c40e721e66ab8398f87677c32574b3b))
*  [Hub'Eau] Upgrade the default version to 1.0.1 (close [#140](https://github.com/kalisio/kargo/pull/140)) ([6d734d87](https://github.com/kalisio/kargo/commit/6d734d8786dbd91c6190ab5e367c09e4fc5eba67))


### 0.6.0 (2020-01-22)

##### New Features

*  [Grafana] Repeat the API graph for each consumers (closed [#139](https://github.com/kalisio/kargo/pull/139)) ([12bc3998](https://github.com/kalisio/kargo/commit/12bc3998e3b828d108fb9e3869b475f131641d11))
*  [Traefik] Traefik should support gzip compression (close [#137](https://github.com/kalisio/kargo/pull/137)) ([b4d59306](https://github.com/kalisio/kargo/commit/b4d593069187c07f7d267d383ef03b5e30167c45))
*  [Prometheus] remove swarm-healthchecks rule (close [#135](https://github.com/kalisio/kargo/pull/135)) ([7ec50f6e](https://github.com/kalisio/kargo/commit/7ec50f6e4a95dccae1c39074eded8cbbde3fe2fa))
*  [MapProxy] Upgrade default version to 1.12.0 (close [#132](https://github.com/kalisio/kargo/pull/132)) ([69404ead](https://github.com/kalisio/kargo/commit/69404ead2096d9561e677af6bf3a5d09d55d24f4))
*  [Prometheus] Increase duration condition of the cluster-high-load alert rule (close [#133](https://github.com/kalisio/kargo/pull/133)) ([fa80b1ad](https://github.com/kalisio/kargo/commit/fa80b1ad417e64383f94917bdea9cdbcddc702ea))

##### Bug Fixes

*  [express-gateway] S3 requests return a '502 bad gateway error' (close [#138](https://github.com/kalisio/kargo/pull/138)) ([a1bcb661](https://github.com/kalisio/kargo/commit/a1bcb66129a38a3d220f29d80f64d03c801adca6))
*  [Grafana] API dashboard has incorrect labels (close [#134](https://github.com/kalisio/kargo/pull/134)) ([dc7bdb3c](https://github.com/kalisio/kargo/commit/dc7bdb3c3fb6cc535547a8569471300622ed33fb))
*  [MapProxy] MapProxy build is not working anymore (close [#68](https://github.com/kalisio/kargo/pull/68)) ([2a21ff99](https://github.com/kalisio/kargo/commit/2a21ff998eb454ad02ac173c6ebb67aec6b22ab7))

### 0.5.0 (2020-01-15)

##### New Features

*  Define automatically service image and tag from when loading an archive (close [#131](https://github.com/kalisio/kargo/pull/131)) ([19723cc3](https://github.com/kalisio/kargo/commit/19723cc3b2e442b8c869de68cdca84bba6a1a76f))
*  Upgrade default version of weacast loaders (close [#130](https://github.com/kalisio/kargo/pull/130)) ([2f0d91d9](https://github.com/kalisio/kargo/commit/2f0d91d9d9f03118d5917d3ffe773b7181fc491a))
*  Upgrade default version of weacast (close [#129](https://github.com/kalisio/kargo/pull/129)) ([1b412224](https://github.com/kalisio/kargo/commit/1b4122240ad8654cad28a1c38fb08f5f13740d2d))

##### Bug Fixes

*  Maputnik healthcheck is no more working (close [#128](https://github.com/kalisio/kargo/pull/128)) ([1abc8640](https://github.com/kalisio/kargo/commit/1abc8640d3fa34df6001c5157fc7a04317c40850))
*  kano local build is no more working (close [#127](https://github.com/kalisio/kargo/pull/127)) ([3a3a91e3](https://github.com/kalisio/kargo/commit/3a3a91e36676f58954f59347fbc9450670f41d07))
*  Info subcommand should display the stack names not the corresponding environment variables (close [#126](https://github.com/kalisio/kargo/pull/126)) ([523afaeb](https://github.com/kalisio/kargo/commit/523afaebc0a4281cc163a710a6ab467c132ec5f9))
*  Range request headers not correctly forwarded to S3 (close [#125](https://github.com/kalisio/kargo/pull/125)) ([7878a7a7](https://github.com/kalisio/kargo/commit/7878a7a77a89bfd51c01555ec53eed102bacd0c5))

### 0.4.0 (2020-01-08)

##### New Features

*  Add API Gateway monitoring capabilities (close [#118](https://github.com/kalisio/kargo/pull/118)) ([715750c3](https://github.com/kalisio/kargo/commit/715750c39f9c2bab09a3983daceacf53cc399da7))
*  Add the services provided by Kaabah (close [#114](https://github.com/kalisio/kargo/pull/114)) [skip ci] ([940809d0](https://github.com/kalisio/kargo/commit/940809d077c9045ed3b6eb6e49453426b9a07afb))
*  Weacast routing via Traefik is no more required (closed [#120](https://github.com/kalisio/kargo/pull/120)) revert: weacast healthcheck configuration ([e20e89de](https://github.com/kalisio/kargo/commit/e20e89de9224fb0b5a91aed9d74d66bd0220010d))
*  Upgrade default version of hubeau (closed [#123](https://github.com/kalisio/kargo/pull/123)) ([1cea56f3](https://github.com/kalisio/kargo/commit/1cea56f3ac017a7831e2dd9e4c8d400e2eaf0bc4))
*  Upgrade default version of teleray (close [#122](https://github.com/kalisio/kargo/pull/122)) ([6e52dfd5](https://github.com/kalisio/kargo/commit/6e52dfd5ca66503cbe89e62068c16d07d21f4960))
*  Upgrade default version of vigicrues (close [#121](https://github.com/kalisio/kargo/pull/121)) ([fca0a7b8](https://github.com/kalisio/kargo/commit/fca0a7b84883a02c61d660a4448cc8904b25d3a6))
*  Provide a ready to deploy image of the gateway (close [#119](https://github.com/kalisio/kargo/pull/119)) ([2774fc3f](https://github.com/kalisio/kargo/commit/2774fc3f7f032b571b78c16c24e3d2ebf2ae50d7))
*  Allow to use a template for configuration files (close [#116](https://github.com/kalisio/kargo/pull/116)) ([b22a5887](https://github.com/kalisio/kargo/commit/b22a5887ca0c980aaacc47050fa32742ec841c7b))
*  Allow to pass KEY_SECRET environment variable to express-gateway (close [#110](https://github.com/kalisio/kargo/pull/110)) ([25087eca](https://github.com/kalisio/kargo/commit/25087eca7841b22dfe6bcf7740d1f2ba505fa49f))
*  Allow to setup Proxy Environment Variables (close [#106](https://github.com/kalisio/kargo/pull/106)) ([2b8b9a9a](https://github.com/kalisio/kargo/commit/2b8b9a9ac12e0327c5f01fa9905bb8698e659c22))
*  Provide a plugin that could populate the gateway (close [#109](https://github.com/kalisio/kargo/pull/109)) ([8048e70d](https://github.com/kalisio/kargo/commit/8048e70d4ef1e372036ac55e52982900d2cd315f))
*  Allow to enable DEBUG mode (close [#107](https://github.com/kalisio/kargo/pull/107)) ([606c99ef](https://github.com/kalisio/kargo/commit/606c99ef0e3338fe00a9077a929796847c3193f9))
*  Provide a proxy service to S3 (close [#105](https://github.com/kalisio/kargo/pull/105)) ([9c279a20](https://github.com/kalisio/kargo/commit/9c279a208e886ac01a933dd4a7ae2069beeb75fe))
*  Add an healthcheck to the gateway (close [#104](https://github.com/kalisio/kargo/pull/104)) ([01a5f3f4](https://github.com/kalisio/kargo/commit/01a5f3f408ef5948dbd22b54512654fb633740ad))
*  Deploy the gateway on the manager node (close [#103](https://github.com/kalisio/kargo/pull/103)) ([e03078c6](https://github.com/kalisio/kargo/commit/e03078c6f1c7b15b1bee07d2be2c857407393934))
*  Remove deployment constraints on krawler based jobs (closed [#102](https://github.com/kalisio/kargo/pull/102)) ([8a16e986](https://github.com/kalisio/kargo/commit/8a16e98681f0bb06b302f704f338bd42d715ae96))
*  Integrate an API gateway to access the services (close [#78](https://github.com/kalisio/kargo/pull/78)) ([ad6db480](https://github.com/kalisio/kargo/commit/ad6db480374be4e86f1b47744b7ca87035f8aed1))
*  kargo info should display the services (close [#101](https://github.com/kalisio/kargo/pull/101)) ([c081953b](https://github.com/kalisio/kargo/commit/c081953b2e016604f61af5cdcfae025926fbe9be))
*  Enhance Thredds CORS policy to allow Range Requests (close [#97](https://github.com/kalisio/kargo/pull/97)) ([58de1c5e](https://github.com/kalisio/kargo/commit/58de1c5edd404d87836725cd33702f6adc49be37))
*  Update Vigicrues deployment files (closed [#95](https://github.com/kalisio/kargo/pull/95)) ([b26cc755](https://github.com/kalisio/kargo/commit/b26cc75586205ccf8680ceb66993a248856e1983))
*  Integrate HUB'EAU job (closed [#90](https://github.com/kalisio/kargo/pull/90)) ([7c7660f9](https://github.com/kalisio/kargo/commit/7c7660f969a4735e3c58d50c93240837b69bc55c))
*  Update Maputnik default version (closed [#89](https://github.com/kalisio/kargo/pull/89)) ([f7d971e5](https://github.com/kalisio/kargo/commit/f7d971e594e66be7d36f5aabf86fcea88883e16b))
*  Enable Redis persistence (closed [#87](https://github.com/kalisio/kargo/pull/87)) ([92b8ff74](https://github.com/kalisio/kargo/commit/92b8ff748d0d2e292a9ca18cc71e4884f56ceda4))
*  Provide a REDIS gui (closed [#84](https://github.com/kalisio/kargo/pull/84)) ([b151d0f5](https://github.com/kalisio/kargo/commit/b151d0f58d9a9a10a47636c58c1d4d761d2c5df0))
*  Add healthcheck on REDIS (closed [#85](https://github.com/kalisio/kargo/pull/85)) ([af643a28](https://github.com/kalisio/kargo/commit/af643a285ed44418aa72fb7ee544495d9bd49f44))
*  MapServer should use kalisio/mapserver as the default image, version 7.4 (closed [#82](https://github.com/kalisio/kargo/pull/82)) ([07283830](https://github.com/kalisio/kargo/commit/0728383095207ec1c5de4176dfa3b3c83320109a))

##### Bug Fixes

*  Deploy all may not work (close [#67](https://github.com/kalisio/kargo/pull/67)) ([7c813f1c](https://github.com/kalisio/kargo/commit/7c813f1cd9e6637d39ffc17d2db963873ef79d32))
*  install-awscli.sh is not working anymore (close [#117](https://github.com/kalisio/kargo/pull/117)) ([72f31b5a](https://github.com/kalisio/kargo/commit/72f31b5a071301c72160fea6a7627221c666e2f4))
*  Services should be removed in reverse order of deployment  (close [#115](https://github.com/kalisio/kargo/pull/115)) ([c792a24f](https://github.com/kalisio/kargo/commit/c792a24f67b19d93e74decc97864466236995d62))
*  Missing scopes in the basic-auth credential (close [#112](https://github.com/kalisio/kargo/pull/112)) ([46952088](https://github.com/kalisio/kargo/commit/469520887112ca76f2f71f0d2cd4d630dbcdb276))
*  Cannot load archive when the service contains an hyphen (close [#100](https://github.com/kalisio/kargo/pull/100)) ([a634a15e](https://github.com/kalisio/kargo/commit/a634a15e2b5e6cd93723a3346ff3cc3d41832eb8))
*  Label vigicrues is missing in the vigicrues services (closed [#88](https://github.com/kalisio/kargo/pull/88)) ([b885b83b](https://github.com/kalisio/kargo/commit/b885b83b7dc2de798c7adf1fff7023bd4e4dcd83))
*  Default MapServer image name is invalid (closed [#83](https://github.com/kalisio/kargo/pull/83)) ([8338dea9](https://github.com/kalisio/kargo/commit/8338dea9173b3a8cdcfd7be1b6180579a52da36b))

### 0.3.0 (2019-09-26)

##### New Features

*  Automate archive importation while deploying (closed [#81](https://github.com/kalisio/kargo/pull/81)) ([e353b1d0](https://github.com/kalisio/kargo/commit/e353b1d01825ca80fc4f2794dcfec3730d87c14d))
*  Allow to import an image from an archive (closed [#80](https://github.com/kalisio/kargo/pull/80)) ([5aa097ca](https://github.com/kalisio/kargo/commit/5aa097ca79f898b983208f16ba19f977681b54b2))
*  Allow to import an image from an archive (closed [#80](https://github.com/kalisio/kargo/pull/80)) ([0e7633df](https://github.com/kalisio/kargo/commit/0e7633dfac685aa67578ca6547fbb68b50865186))
*  Update AWS CLI installation method (closed [#79](https://github.com/kalisio/kargo/pull/79)) ([6c2408c4](https://github.com/kalisio/kargo/commit/6c2408c43c9ff12a81fe0d02d491bfdc693e891a))
*  Allow to define DATA_DB_URL for Kano and Weacast (closed [#75](https://github.com/kalisio/kargo/pull/75)) ([03893838](https://github.com/kalisio/kargo/commit/03893838f4137d519cc3d490f4a938188d372c77))
*  Update Teleray deploy file (closed [#74](https://github.com/kalisio/kargo/pull/74)) ([1f6a658d](https://github.com/kalisio/kargo/commit/1f6a658dad01b6569c281407076246fa626fe12f))
*  Allow to configure the number of processes/threads used by MapProxy (closed [#73](https://github.com/kalisio/kargo/pull/73)) ([13b9a9fd](https://github.com/kalisio/kargo/commit/13b9a9fd9c3a5805ee2bca56fd233e7ed8e030c2))
*  Docker specific configuration for the seeder should be retrieved from DOCKER_HOST (closed [#71](https://github.com/kalisio/kargo/pull/71)) ([ec74dfbd](https://github.com/kalisio/kargo/commit/ec74dfbd54fc177ee0f43dcdd434cf73ca85a00a))
*  Provide an helper script to install aws cli (closed [#69](https://github.com/kalisio/kargo/pull/69)) ([0f84533d](https://github.com/kalisio/kargo/commit/0f84533d3460ba7431439f17164e9ddf66ac2665))
*  replaced Weacast demo app by new API module closes https://github.com/kalisio/kargo/issues/66 ([6bf6e61a](https://github.com/kalisio/kargo/commit/6bf6e61a67ecc4ea5868051a42e62b606c53a931))
*  Provide a script to simplify installation on workers (closed [#64](https://github.com/kalisio/kargo/pull/64)) ([7a8cb388](https://github.com/kalisio/kargo/commit/7a8cb38889246a7911da4e177f1c1a79d98310cd))
*  Provide a subcommand to update the services (closed [#63](https://github.com/kalisio/kargo/pull/63)) ([379b067b](https://github.com/kalisio/kargo/commit/379b067b3716cf9b18d2acfb1baf3b0533eeb4ac))
*  added healthcheck on jobs Closes https://github.com/kalisio/kargo/issues/60 ([bdcb19e2](https://github.com/kalisio/kargo/commit/bdcb19e2a897e7d0392ef9ec698541f572c50c99))
*  added healthcheck on jobs Closes https://github.com/kalisio/kargo/projects/1 ([e9514b4d](https://github.com/kalisio/kargo/commit/e9514b4d9f0884de54df57d75d5a11c2edcc47c2))
*  Centralize default environment variables (closed [#58](https://github.com/kalisio/kargo/pull/58)) ([388828db](https://github.com/kalisio/kargo/commit/388828db537c96a25577a129c93d97faf64604af))
*  Define default envrionment variables in the deploy files(fixed [#58](https://github.com/kalisio/kargo/pull/58)) ([eeba098c](https://github.com/kalisio/kargo/commit/eeba098c01708c139ed12e19366a58d739e4294c))
*  Provide MapServer deployement capabilities (fixed [#50](https://github.com/kalisio/kargo/pull/50)) ([9c108bcb](https://github.com/kalisio/kargo/commit/9c108bcb3ec2f727e1679637b4884ec5895f6e9b))
*  Enhance the CLI (close [#53](https://github.com/kalisio/kargo/pull/53)) ([b18eb35a](https://github.com/kalisio/kargo/commit/b18eb35ac56d029c3d3ea6e4be2e2a0ecaa436ee))

##### Bug Fixes

*  S3 configuration is not set in Kano (fixed [#76](https://github.com/kalisio/kargo/pull/76)) ([2eb945cc](https://github.com/kalisio/kargo/commit/2eb945ccc7d9721ffad87bc5478c2e552bdbf6dd))
*  tried to make install-awscli independant from user ([ba719367](https://github.com/kalisio/kargo/commit/ba71936778536241fe39e7c8429984e24bf44d80))
*  DOCKER_CERT_PATH default value is restricted to ubuntu use (closed [#70](https://github.com/kalisio/kargo/pull/70)) ([0782ae6f](https://github.com/kalisio/kargo/commit/0782ae6f57e6521731931a6c742b80c511b1e5db))
*  Variable substitution error when deploying the services (closed [#61](https://github.com/kalisio/kargo/pull/61)) ([d51dede6](https://github.com/kalisio/kargo/commit/d51dede66a4624346fd6ddc3663c0d27b770fa4d))
*  Using environment variables as default values in deploy files does not work (closed [#59](https://github.com/kalisio/kargo/pull/59)) ([fd1c5ac1](https://github.com/kalisio/kargo/commit/fd1c5ac1cb7ad2631c9259761551338b4da2eddf))
*  K2 healthcheck must use the healthcheck entrypoint (fixed [#57](https://github.com/kalisio/kargo/pull/57)) ([64ede7d2](https://github.com/kalisio/kargo/commit/64ede7d25b2199e4a1ec93cdc822c5069fde7945))
*  Incorrect deployment files typo: updated_config (close [#54](https://github.com/kalisio/kargo/pull/54)) ([80f36710](https://github.com/kalisio/kargo/commit/80f3671016f629b823744af39ec74733e8eee3a5))

### 0.2.0 (2019-04-21)

##### New Features

*  Add rolling update capabilities (close [#51](https://github.com/kalisio/kargo/pull/51)) ([ba5d63d3](https://github.com/kalisio/kargo/commit/ba5d63d31773f53f70020b63bc777a0154aaff00))
*  Add Healthcheck (close [#2](https://github.com/kalisio/kargo/pull/2)) ([bcaec290](https://github.com/kalisio/kargo/commit/bcaec29061e770014125eed1cdb655e3391356b9))
*  Remove experimental support of CesiumTerrainServer (close [#52](https://github.com/kalisio/kargo/pull/52)) ([d3dade9c](https://github.com/kalisio/kargo/commit/d3dade9c0730158b1154733bd094a9cae37911a6))
*  Create a build script for Kano (close [#49](https://github.com/kalisio/kargo/pull/49)) ([10da411e](https://github.com/kalisio/kargo/commit/10da411e0675756c9846a7fbf5c6c9288d50cebd))
*  added openaq support (close [#42](https://github.com/kalisio/kargo/pull/42)) ([26e7dda7](https://github.com/kalisio/kargo/commit/26e7dda7892d444eac95c7b879be698f9da73b2c))
*  build command should rely on the merged configuration (close [#41](https://github.com/kalisio/kargo/pull/41)) ([f543f6ed](https://github.com/kalisio/kargo/commit/f543f6ed97a3baf547541bf5c739bd5abb39cff1))
*  the command make should copy the build directory of a workspace too (close [#40](https://github.com/kalisio/kargo/pull/40)) ([8b09d22d](https://github.com/kalisio/kargo/commit/8b09d22d580d9bc416c36213c8da7ba4b6a30346))
*  the command make should copy the build directory of a workspace too (close [#40](https://github.com/kalisio/kargo/pull/40)) ([c424fb4d](https://github.com/kalisio/kargo/commit/c424fb4d406877692563eac6cdda6718212a8034))

##### Bug Fixes

*  Mapproxy build does not work any more (close [#47](https://github.com/kalisio/kargo/pull/47)) ([65a07fcf](https://github.com/kalisio/kargo/commit/65a07fcf60fd0d649913633587ed569259cecf63))

### 0.1.0 (2019-02-08)

First release


