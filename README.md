<p align="center"><img src="https://github.com/RobTheFiveNine/nba-league-pass-spoiler-blocker/blob/master/src/images/icon.png?raw=true" /></p>

<h1 align="center">NBA League Pass Spoiler Blocker</h1>

The recent updates to NBA League Pass have resulted in several user interface issues which make it near impossible to watch a game without first seeing spoilers; this extension aims to mitigate that.

This extension will automatically enable the "Hide Scores" feature on League Pass and will also remove the background news story which shows the outcome / summary of the game when you click the "Watch Game" option.

Install
-------
To install the extension, visit one of the following URLs:

- Google Chrome (Pending Review)
- Mozilla FireFox (Pending Review)

Supported Browsers
------------------
The extension has been tested and confirmed to be working with:

- Google Chrome 87.0.4280.88 (Linux x64)
- Mozilla FireFox 84.0 (Linux x64)

Building From Source
--------------------
To build the extension from the source code, you will need the following prerequisites:

- A *nix system with `zip`, `grep` and `tr` available
- Node.js ([https://nodejs.org/](https://nodejs.org/))
- Yarn ([https://yarnpkg.com/](https://yarnpkg.com/))

After ensuring these packages are installed:

1. Download the source code or clone this repository using git: `git clone https://github.com/RobTheFiveNine/nba-league-pass-spoiler-blocker.git`
2. Open a terminal in the folder containing the source code and install the dependencies by running: `yarn`
3. After the dependencies have been installed, run `yarn build:zip` to build and ZIP a production copy into the `zips/` directory. Alternatively, if you want to build a version for development purposes, run `yarn build:dev` to build a copy in the `build/` directory.

License
-------
This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program.  If not, see <https://www.gnu.org/licenses/>.
