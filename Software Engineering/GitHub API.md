# GitHub API

## Installation

[Link to official docs](https://github.com/cli/cli#installation)

### Arch Linux

    sudo pacman -S github-cli

### MacOS

    brew install gh

## Setup

To begin using:

    gh auth login

Then complete the login steps in your terminal.

### Default editor

Use

    gh config set editor "nvim"

to set preffered editor to NeoVim.

## Using jq with gh api

jq is a popular json processor for the command line. You can pipe the output of `gh api` to jq to filter the result.

## Example

To find the amount of contributors of a given repo:

    gh api /repos/folke/lazy.nvim/stats/contributors | jq 'length'
