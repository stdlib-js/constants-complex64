/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

// TypeScript Version: 4.1

/* eslint-disable max-lines */

import NAN = require( '@stdlib/constants-complex64-nan' );
import NUM_BYTES = require( '@stdlib/constants-complex64-num-bytes' );
import ZERO = require( '@stdlib/constants-complex64-zero' );

/**
* Interface describing the `complex64` namespace.
*/
interface Namespace {
	/**
	* Canonical single-precision complex floating-point NaN.
	*
	* @example
	* var nan = ns.NAN;
	* // returns <Complex64>
	*/
	NAN: typeof NAN;

	/**
	* Size (in bytes) of a 64-bit complex number.
	*
	* @example
	* var bytes = ns.NUM_BYTES;
	* // returns 8
	*/
	NUM_BYTES: typeof NUM_BYTES;

	/**
	* Single-precision complex floating-point zero.
	*
	* @example
	* var zero = ns.ZERO;
	* // returns <Complex64>
	*/
	ZERO: typeof ZERO;
}

/**
* 64-bit complex number mathematical constants.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
