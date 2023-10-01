// Tests that are currently enabled with Turbopack in CI.
// Only tests that are actively testing against Turbopack should
// be enabled here
const enabledTests = [
  'test/development/acceptance-app/ReactRefresh.test.ts',
  'test/development/acceptance-app/ReactRefreshLogBoxMisc.test.ts',
  'test/development/acceptance-app/ReactRefreshRequire.test.ts',
  // 'test/development/acceptance-app/app-hmr-changes.test.ts', (FLAKY)
  'test/development/acceptance-app/dynamic-error.test.ts',
  'test/development/acceptance-app/version-staleness.test.ts',
  'test/development/acceptance/ReactRefreshLogBox-scss.test.ts',
  'test/development/acceptance/ReactRefreshLogBoxMisc.test.ts',
  'test/development/api-cors-with-rewrite/index.test.ts',
  'test/development/app-dir/multiple-compiles-single-route/multiple-compiles-single-route.test.ts',
  // x-ref: below test is flakey and needs to be investigated further
  // 'test/development/app-hmr/hmr.test.ts',
  'test/development/basic/define-class-fields.test.ts',
  'test/development/basic/emotion-swc.test.ts',
  'test/development/basic/legacy-decorators.test.ts',
  'test/development/basic/project-directory-rename.test.ts',
  'test/development/basic/tailwind-jit.test.ts',
  'test/development/basic/theme-ui.test.ts',
  'test/development/dotenv-default-expansion/index.test.ts',
  'test/development/jsconfig-path-reloading/index.test.ts',
  'test/development/middleware-warnings/index.test.ts',
  'test/development/project-directory-with-styled-jsx-suffix/index.test.ts',
  'test/development/repeated-dev-edits/repeated-dev-edits.test.ts',
  'test/development/tsconfig-path-reloading/index.test.ts',
  'test/e2e/app-dir/_allow-underscored-root-directory/_allow-underscored-root-directory.test.ts',
  'test/e2e/app-dir/actions/app-action-invalid.test.ts',
  'test/e2e/app-dir/actions/app-action-size-limit-invalid.test.ts',
  'test/e2e/app-dir/app-alias/app-alias.test.ts',
  'test/e2e/app-dir/app-client-cache/client-cache.test.ts',
  'test/e2e/app-dir/app-css-pageextensions/index.test.ts',
  'test/e2e/app-dir/app-edge-root-layout/index.test.ts',
  'test/e2e/app-dir/app-edge/app-edge.test.ts',
  'test/e2e/app-dir/app-prefetch-false/app-prefetch-false.test.ts',
  'test/e2e/app-dir/app-prefetch/prefetching.test.ts',
  'test/e2e/app-dir/app-validation/validation.test.ts',
  'test/e2e/app-dir/asset-prefix/asset-prefix.test.ts',
  'test/e2e/app-dir/async-component-preload/async-component-preload.test.ts',
  'test/e2e/app-dir/autoscroll-with-css-modules/index.test.ts',
  'test/e2e/app-dir/back-button-download-bug/back-button-download-bug.test.ts',
  'test/e2e/app-dir/build-size/index.test.ts',
  'test/e2e/app-dir/global-error/global-error.test.ts',
  'test/e2e/app-dir/hello-world/hello-world.test.ts',
  'test/e2e/app-dir/import/import.test.ts',
  'test/e2e/app-dir/layout-params/layout-params.test.ts',
  'test/e2e/app-dir/metadata-suspense/index.test.ts',
  'test/e2e/app-dir/rewrites-redirects/rewrites-redirects.test.ts',
  'test/e2e/app-dir/route-page-manifest-bug/route-page-manifest-bug.test.ts',
  'test/e2e/app-dir/router-autoscroll/router-autoscroll.test.ts',
  'test/e2e/app-dir/router-stuck-dynamic-static-segment/router-stuck-dynamic-static-segment.test.ts',
  'test/e2e/app-dir/rsc-basic/rsc-basic.test.ts',
  'test/e2e/app-dir/search-params-react-key/layout-params.test.ts',
  'test/e2e/app-dir/searchparams-static-bailout/searchparams-static-bailout.test.ts',
  'test/e2e/app-dir/test-template/{{ toFileName name }}/{{ toFileName name }}.test.ts',
  'test/e2e/app-dir/use-selected-layout-segment-s/use-selected-layout-segment-s.test.ts',
  'test/e2e/app-dir/crypto-globally-available/crypto-globally-available.test.ts',
  'test/e2e/browserslist-extends/index.test.ts',
  'test/e2e/config-promise-export/async-function.test.ts',
  'test/e2e/config-promise-export/promise.test.ts',
  'test/e2e/conflicting-app-page-error/index.test.ts',
  'test/e2e/disable-js-preload/test/index.test.js',
  'test/e2e/hello-world/hello-world.test.ts',
  'test/e2e/i18n-api-support/index.test.ts',
  'test/e2e/i18n-disallow-multiple-locales/i18n-disallow-multiple-locales.test.ts',
  'test/e2e/i18n-ignore-rewrite-source-locale/rewrites-with-basepath.test.ts',
  'test/e2e/i18n-ignore-rewrite-source-locale/rewrites.test.ts',
  'test/e2e/link-with-api-rewrite/index.test.ts',
  'test/e2e/middleware-fetches-with-body/index.test.ts',
  'test/e2e/middleware-shallow-link/index.test.ts',
  'test/e2e/new-link-behavior/child-a-tag-error.test.ts',
  'test/e2e/new-link-behavior/index.test.ts',
  'test/e2e/new-link-behavior/material-ui.test.ts',
  'test/e2e/new-link-behavior/stitches.test.ts',
  'test/e2e/new-link-behavior/typescript.test.ts',
  'test/e2e/next-head/index.test.ts',
  'test/e2e/next-image-forward-ref/index.test.ts',
  'test/e2e/no-eslint-warn-with-no-eslint-config/index.test.ts',
  'test/e2e/nonce-head-manager/index.test.ts',
  'test/e2e/postcss-config-cjs/index.test.ts',
  'test/e2e/proxy-request-with-middleware/test/index.test.ts',
  'test/e2e/repeated-forward-slashes-error/repeated-forward-slashes-error.test.ts',
  'test/e2e/styled-jsx/index.test.ts',
  'test/e2e/test-template/{{ toFileName name }}/{{ toFileName name }}.test.ts',
  'test/e2e/test-utils-tests/basic/basic.test.ts',
  'test/e2e/trailingslash-with-rewrite/index.test.ts',
  'test/e2e/transpile-packages/index.test.ts',
  'test/e2e/type-module-interop/index.test.ts',
  'test/e2e/typescript-version-no-warning/typescript-version-no-warning.test.ts',
  'test/e2e/typescript-version-warning/typescript-version-warning.test.ts',
  'test/e2e/undici-fetch/index.test.ts',
  'test/e2e/yarn-pnp/test/with-eslint.test.ts',
  'test/e2e/yarn-pnp/test/with-next-sass.test.ts',
  'test/integration/404-page-custom-error/test/index.test.js',
  'test/integration/amp-export-validation/test/index.test.js',
  'test/integration/amphtml-custom-validator/test/index.test.js',
  'test/integration/amphtml-fragment-style/test/index.test.js',
  'test/integration/api-body-parser/test/index.test.js',
  'test/integration/api-catch-all/test/index.test.js',
  'test/integration/app-aspath/test/index.test.js',
  'test/integration/app-config-asset-prefix/test/index.test.js',
  'test/integration/app-functional/test/index.test.js',
  'test/integration/auto-export-error-bail/test/index.test.js',
  'test/integration/auto-export-query-error/test/index.test.js',
  'test/integration/bigint/test/index.test.js',
  'test/integration/catches-missing-getStaticProps/test/index.test.js',
  'test/integration/clean-distdir/test/index.test.js',
  'test/integration/client-navigation-a11y/test/index.test.js',
  'test/integration/config-experimental-warning/test/index.test.js',
  'test/integration/config-schema-check/test/index.test.js',
  'test/integration/config-syntax-error/test/index.test.js',
  'test/integration/config-validation/test/index.test.ts',
  'test/integration/conflicting-ssg-paths/test/index.test.js',
  'test/integration/create-next-app/index.test.ts',
  'test/integration/create-next-app/package-manager.test.ts',
  'test/integration/create-next-app/templates-app.test.ts',
  'test/integration/create-next-app/templates-pages.test.ts',
  'test/integration/css/test/dev-css-handling.test.js',
  'test/integration/custom-error-page-exception/test/index.test.js',
  'test/integration/custom-server-types/test/index.test.js',
  'test/integration/custom-server/test/index.test.js',
  'test/integration/dedupes-scripts/test/index.test.js',
  'test/integration/development-hmr-refresh/test/index.test.js',
  'test/integration/disable-js/test/index.test.js',
  'test/integration/document-head-warnings/test/index.test.js',
  'test/integration/duplicate-pages/test/index.test.js',
  'test/integration/dynamic-require/test/index.test.js',
  'test/integration/dynamic-route-rename/test/index.test.js',
  'test/integration/empty-object-getInitialProps/test/index.test.js',
  'test/integration/errors-on-output-to-public/test/index.test.js',
  'test/integration/errors-on-output-to-static/test/index.test.js',
  'test/integration/eslint/test/lint-cache.test.js',
  'test/integration/eslint/test/next-lint.test.js',
  'test/integration/export-404/test/index.test.js',
  'test/integration/export-default-map/test/index.test.js',
  'test/integration/export-dynamic-pages/test/index.test.js',
  'test/integration/export-fallback-true-error/test/index.test.js',
  'test/integration/export-getInitialProps-warn/test/index.test.js',
  'test/integration/export-image-default/test/index.test.js',
  'test/integration/export-image-loader-legacy/test/index.test.js',
  'test/integration/export-index-not-found-gsp/test/index.test.ts',
  'test/integration/export-intent/test/index.test.js',
  'test/integration/export-no-build/test/index.test.js',
  'test/integration/export-progress-status-message/test/index.test.js',
  'test/integration/export-subfolders/test/index.test.js',
  'test/integration/fallback-modules/test/index.test.js',
  'test/integration/filesystempublicroutes/test/index.test.js',
  'test/integration/firebase-grpc/test/index.test.js',
  'test/integration/future/test/index.test.js',
  'test/integration/gsp-extension/test/index.test.js',
  'test/integration/handles-export-errors/test/index.test.js',
  'test/integration/hashbang/test/index.test.js',
  'test/integration/index-index/test/index.test.js',
  'test/integration/initial-ref/test/index.test.js',
  'test/integration/invalid-config-values/test/index.test.js',
  'test/integration/invalid-page-automatic-static-optimization/test/index.test.js',
  'test/integration/invalid-revalidate-values/test/index.test.js',
  'test/integration/invalid-server-options/test/index.test.js',
  'test/integration/json-serialize-original-error/test/index.test.js',
  'test/integration/legacy-ssg-methods-error/test/index.test.js',
  'test/integration/link-ref/test/index.test.js',
  'test/integration/link-with-multiple-child/test/index.test.js',
  'test/integration/link-without-router/test/index.test.js',
  'test/integration/middleware-build-errors/test/index.test.js',
  'test/integration/middleware-overrides-node.js-api/test/index.test.ts',
  'test/integration/missing-document-component-error/test/index.test.js',
  'test/integration/next-image-legacy/custom-resolver/test/index.test.ts',
  'test/integration/next-image-legacy/no-intersection-observer-fallback/test/index.test.ts',
  'test/integration/next-image-legacy/noscript/test/index.test.ts',
  'test/integration/next-image-legacy/react-virtualized/test/index.test.ts',
  'test/integration/next-image-legacy/unoptimized/test/index.test.ts',
  'test/integration/next-image-new/react-virtualized/test/index.test.ts',
  // 'test/integration/next-image-new/unoptimized/test/index.test.ts', (FLAKY)
  'test/integration/no-op-export/test/index.test.js',
  'test/integration/non-next-dist-exclude/test/index.test.js',
  'test/integration/non-standard-node-env-warning/test/index.test.js',
  'test/integration/ondemand/test/index.test.js',
  'test/integration/optional-chaining-nullish-coalescing/test/index.test.js',
  'test/integration/plugin-mdx-rs/test/index.test.js',
  'test/integration/prerender-invalid-catchall-params/test/index.test.js',
  'test/integration/prerender-invalid-paths/test/index.test.js',
  'test/integration/prerender-legacy/test/index.test.js',
  'test/integration/production-build-dir/test/index.test.js',
  'test/integration/production-start-no-build/test/index.test.js',
  'test/integration/router-hash-navigation/test/index.test.js',
  'test/integration/router-prefetch/test/index.test.js',
  'test/integration/router-rerender/test/index.test.js',
  'test/integration/scss/test/dev-css-handling.test.js',
  'test/integration/src-dir-support-double-dir/test/index.test.js',
  'test/integration/ssg-dynamic-routes-404-page/test/index.test.js',
  'test/integration/static-404/test/index.test.js',
  'test/integration/static-page-name/test/index.test.js',
  'test/integration/trailing-slashes-href-resolving/test/index.test.js',
  'test/integration/tsconfig-verifier/test/index.test.js',
  'test/integration/typescript-baseurl/test/index.test.js',
  'test/integration/typescript-external-dir/project/test/index.test.js',
  'test/integration/typescript-filtered-files/test/index.test.js',
  // 'test/integration/typescript-hmr/test/index.test.js', (FLAKY)
  'test/integration/webpack-config-mainjs/test/index.test.js',
  'test/integration/with-electron/test/index.test.js',
  'test/production/ci-missing-typescript-deps/index.test.ts',
  'test/production/enoent-during-require/index.test.ts',
  'test/production/eslint-plugin-deps/index.test.ts',
  'test/production/fallback-export-error/index.test.ts',
  'test/production/jest/new-link-behavior.test.ts',
  'test/production/jest/transpile-packages.test.ts',
  'test/production/postcss-plugin-config-as-string/index.test.ts',
  'test/production/supports-module-resolution-nodenext/supports-moduleresolution-nodenext.test.ts',
]

module.exports = { enabledTests }
