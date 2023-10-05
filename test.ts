// This file is required by karma.conf.js and loads recursively all the .spec and framework files

/* These import statements are importing necessary modules for testing Angular applications. */
import 'zone.js/testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';

/* The `declare const require` statement is declaring a constant variable named `require` with a
specific type. In this case, it is declaring the `require` function with a specific signature. */
declare const require: {
  context(
    path: string,
    deep?: boolean,
    filter?: RegExp
  ): {
    <T>(id: string): T;
    keys(): string[];
  };
};

/* The code is initializing the Angular testing environment. It is using the `getTestBed()` function to
retrieve the testing bed, which is responsible for creating and managing the testing environment. */
// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

// Then we find all the tests.
const context = require.context('./', true, /\.spec\.ts$/);
// And load the modules.
context.keys().map(context);
