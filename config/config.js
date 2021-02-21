/* Magic Mirror Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", 	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/", 	// The URL path where MagicMirror is hosted. If you are using a Reverse proxy
					// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], 	// Set [] to allow all IP addresses
															// or add a specific IPv4 of 192.168.1.5 :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
															// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"],
	timeFormat: 24,
	units: "metric",
	// serverOnly:  true/false/"local" ,
	// local for armv6l processors, default
	//   starts serveronly and then starts chrome browser
	// false, default for all NON-armv6l devices
	// true, force serveronly mode, because you want to.. no UI on this device

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
		module: "compliments",
		position: "middle_center",
		config: {
			
		}
	},
		{
			module: "clock",
			position: "top_left",
			config: {
				timezone: "Oslo/GMT+2"
			}
		},
		{
			module: "currentweather",
			position: "top_left",
			config: {
				location: "Oslo, NO",
				appid: "9fe600f64cc548873bd21ef1f620fd1d"
			}
		},
		{
			module: "weatherforecast",
			position: "top_left",
			header: "Weather Forecast",
			config: {
				location: "Oslo, NO",
				appid: "9fe600f64cc548873bd21ef1f620fd1d",
				colored: "true"
			}
		},
		 {
            module: "MMM-SpaceX",
            position: "bottom_center",
            config: {
                records: 5,
                modus: "upcoming",
                showExtraInfo: true,
				showColumnHeader: true,
	    }
	},
	{
	    module: "MMM-Entur-tavle",
	    position: "lower_third",
	    config: {
	    	stopId: '59421',
        	stopType: 'StopPlace',
        	numResults: 5,
        	showName: true,
        	highlightRealtime: true,
        	delay: [5, 'minutes']
	    }
	},
{
		module: "MMM-MagicMover",
		position: "left",
		config: {
			updateInterval: 60 * 1000,
			maxMove: 20,
        }
    },
		//{
        //    module: 'MMM-OnThisDay',
        //    position: "bottom_left"
        //},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "Good news network",
						url: "https://www.goodnewsnetwork.org/category/news/feed/"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
