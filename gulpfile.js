'use strict';

const gulp = require('gulp');
const build = require('@microsoft/sp-build-web');
const fs = require('fs');

build.addSuppression(`Warning - [sass] The local CSS class 'ms-Grid' is not camelCase and will not be type-safe.`);

// Update the version number in the version.ts file
gulp.task('versionUpdater', (done) => {
  const pkgContents = require('./package.json');
  const filePath = './src/common/telemetry/version.ts';
  const fileContents = `export const version: string = "{versionPlaceholder}";`;
  const newContents = fileContents.replace("{versionPlaceholder}", pkgContents.version);
  console.log(`Updating version number to: ${pkgContents.version}`);
  fs.writeFileSync(filePath, newContents, { encoding: "utf8" });
  done();
});

build.initialize(gulp);
