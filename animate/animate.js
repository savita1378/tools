/*
Plugin Name: amCharts Animate
Description: Smoothly animates some properties
Author: Paul Chapman, amCharts
Version: 1.0.0
Author URI: http://www.amcharts.com/

Copyright 2015 amCharts

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

Please note that the above license covers only this plugin. It by all means does
not apply to any other amCharts products that are covered by different licenses.
*/

/* globals AmCharts */
/* jshint -W061 */

AmCharts.addInitHandler( function( chart ) {

	chart.animateData = function( data, options ) {
		options.complete();
	};

}, [ "serial" ] );
