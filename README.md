# susustyles
This repo stores all of SuSu's configuration for the website's Battery instance. It also allows a user to generate a `.json` file which can be used for running `battery` locally.

## Prerequisites
This repo relies on `Yarn` to run. `Yarn` also depends on some other tools. You can check if you have these installed by typing `brew -v`, `node -v` and `yarn -v` in your terminal. If any of say 'not found' then install them:

- [Homebrew installation](https://brew.sh/)
- Run `brew install node` in your terminal
- [Yarn installation page](https://yarnpkg.com/lang/en/docs/install/#mac-stable)

## Getting started

Go to terminal and navigate in a folder where you want this code to live (avoid putting this in a Dropbox or Google Drive folder as syncing the node_modules directory will play havoc with your system)

Run the following commands
```sh
git clone git@github.com:susudotcomputer/susustyle.git
cd susustyle
```

## Existing JSON
If you just want access to the most recent `battery-config` file, you now have that available to you in `config/susustyle.json`.

## Updating/Adding to the config
If you need to add or update the configuration of SuSu's `battery`, navigate to the `src/` folder which has all `props`,`molecules` and `plugin` config files.

If you make changes to any existing files, or add new ones, you will need to do two things to get an up-to-date `.json` file.

1. Run `yarn watch` in terminal
2. In a separate terminal tab or window, run `yarn compile`. This will update the `susustyle.json`


