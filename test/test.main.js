/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

/* global global */

'use strict';

// MODULES //

var tape = require( 'tape' );
var proxyquire = require( 'proxyquire' );
var isBrowser = require( './../lib/main.js' );


// FIXTURES //

var Global;
if ( typeof global === 'undefined' ) {
	Global = {};
} else {
	Global = global;
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isBrowser, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if the runtime is a web browser', function test( t ) {
	var isBrowser;
	var win;

	win = {};
	Global.window = win;

	isBrowser = proxyquire( './../lib/main.js', {
		'@stdlib/utils-global': getGlobal,
		'@stdlib/assert-is-node': false,
		'./global_scope.js': true
	});

	t.equal( isBrowser(), true, 'returns true' );
	t.end();

	function getGlobal() {
		return win;
	}
});

tape( 'the function returns `false` if the runtime is not a web browser (`window` global is not an object)', function test( t ) {
	var isBrowser;
	var win;

	win = true;
	Global.window = win;

	isBrowser = proxyquire( './../lib/main.js', {
		'@stdlib/utils-global': getGlobal,
		'@stdlib/assert-is-node': false,
		'./global_scope.js': true
	});

	t.equal( isBrowser(), false, 'returns false' );
	t.end();

	function getGlobal() {
		return win;
	}
});

tape( 'the function returns `false` if the runtime is not a web browser (`window` global is not the detected global variable)', function test( t ) {
	var isBrowser;
	var win;

	win = {};
	Global.window = win;

	isBrowser = proxyquire( './../lib/main.js', {
		'@stdlib/utils-global': getGlobal,
		'@stdlib/assert-is-node': false,
		'./global_scope.js': true
	});

	t.equal( isBrowser(), false, 'returns false' );
	t.end();

	function getGlobal() {
		return {};
	}
});

tape( 'the function returns `false` if the runtime is not a web browser (`window` global is not equal to the global scope)', function test( t ) {
	var isBrowser;
	var win;

	win = {};
	Global.window = win;

	isBrowser = proxyquire( './../lib/main.js', {
		'@stdlib/utils-global': getGlobal,
		'@stdlib/assert-is-node': false,
		'./global_scope.js': false
	});

	t.equal( isBrowser(), false, 'returns false' );
	t.end();

	function getGlobal() {
		return win;
	}
});
