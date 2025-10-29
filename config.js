// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'Khipher',
	imageBackground: false,
	openInNewTab: true,
	twelveHourFormat: true,

	// Greetings
	greetingMorning: 'Good morning',
	greetingAfternoon: 'Good afternoon,',
	greetingEvening: 'Good evening,',
	greetingNight: 'Go to Sleep,',

	// Layout
	bentoLayout: 'bento', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: '58c52b844ab539b78cb853fa9f4bfd9b', // Write here your API Key
	weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'F', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '42.498993',
	defaultLongitude: '-83.367714',

	// Autochange
	autoChangeTheme: true,

	// Autochange by OS
	changeThemeByOS: true,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'Github',
			icon: 'github',
			link: 'https://github.com/',
		},
		{
			id: '2',
			name: 'CS50',
			icon: 'code',
			link: 'https://cs50.harvard.edu/x/',
		},
		{
			id: '3',
			name: 'Todoist',
			icon: 'trello',
			link: 'https://todoist.com',
		},
		{
			id: '4',
			name: 'Calendar',
			icon: 'calendar',
			link: 'https://calendar.google.com/calendar/r',
		},
		{
			id: '5',
			name: 'Portfolio',
			icon: 'pencil',
			link: 'https://khipher.art/',
		},
		{
			id: '6',
			name: 'YouTube',
			icon: 'youtube',
			link: 'https://www.youtube.com/@Khipher',
		},
	],

	secondButtonsContainer: [
		{
			id: '1',
			name: 'Music',
			icon: 'headphones',
			link: 'https://music.youtube.com/',
		},
		{
			id: '2',
			name: 'Tumblr',
			icon: 'type-outline',
			link: 'https://www.tumblr.com/',
		},
		{
			id: '3',
			name: 'Stoat',
			icon: 'message-square-more',
			link: 'https://stoat.chat/app',
		},
		{
			id: '4',
			name: 'Newgrounds',
			icon: 'brush',
			link: 'https://www.newgrounds.com/',
		},
		{
			id: '5',
			name: 'Google Messages',
			icon: 'message-circle-heart',
			link: 'https://messages.google.com/web/conversations',
		},
		{
			id: '6',
			name: 'Bluesky',
			icon: 'birdhouse',
			link: 'https://bsky.app/',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'music',
			id: '1',
			links: [
				{
					name: 'raw',
					link: 'https://music.youtube.com/playlist?list=PLQ0nQZE9RvIYSmOb_Jffb_NowD6UYoFSX&si=ZExkEYH9_iY5mmwn',
				},
				{
					name: 'nights',
					link: 'https://music.youtube.com/playlist?list=PLQ0nQZE9RvIZGdyVkWeBdNi7EbvfU0jl3&si=B0rcvcqzqyunEv6A',
				},
				{
					name: 'unwind',
					link: 'https://music.youtube.com/playlist?list=PLQ0nQZE9RvIaLy_xmgxk5m2Um7Sz5PvBq&si=r45hH2nLC8r8EE4Q',
				},
				{
					name: 'Locked In',
					link: 'https://music.youtube.com/playlist?list=PLQ0nQZE9RvIbsdUrqMaFMuvrkcYIMFyfi&si=XUTDpdCAuqk_CYI5',
				},
			],
		},
		{
			icon: 'ghost',
			id: '2',
			links: [
				{
					name: 'Portfolio Site',
					link: 'https://khipher.art/',
				},
				{
					name: 'Main YouTube',
					link: 'https://www.youtube.com/@Khipher',
				},
				{
					name: 'Main Newgrounds',
					link: 'https://khipher.newgrounds.com/',
				},
				{
					name: 'Art Tumblr',
					link: 'https://khiphering.tumblr.com/',
				},
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: 'binary',
			id: '1',
			links: [
				{
					name: 'Spotify',
					link: 'https://www.spotify.com',
				},
				{
					name: 'Reddit',
					link: 'https://www.reddit.com',
				},
				{
					name: 'Hashnode',
					link: 'https://www.hashnode.com',
				},
				{
					name: 'Pocket',
					link: 'https://www.pocket.com',
				},
			],
		},
		{
			icon: 'github',
			id: '2',
			links: [
				{
					name: 'Front',
					link: 'https://www.reddit.com/r/Frontend/',
				},
				{
					name: 'Rust',
					link: 'https://www.reddit.com/r/rust/',
				},
				{
					name: 'Go',
					link: 'https://www.reddit.com/r/golang/',
				},
				{
					name: 'Repos',
					link: 'https://github.com/migueravila',
				},
			],
		},
	],
};
