# Git Kata - Part 1

This set of katas will focus on using skills within Git that we use frequently.
There are many exercises we could do with `git`, and this set is just a few of them.

## Challenge 1 - Pull a branch from another remote repository

By default, the remote repository for a cloned repo is called `origin`.
When we run commands like `git push origin {branch-name}`, we are telling git to push our changes to `{branch-name}` within the remote repository `origin`.
However, there are times when it can be useful to have multiple remote versions of the same repository (e.g. working out of a fork).
This kata will be fetching another remote repo (we'll call it `upstream`), checking out one of its branches.

## Challenge 2 - Set up an alias

[Git aliases](https://git-scm.com/book/en/v2/Git-Basics-Git-Aliases) can be a useful way to speed up your git workflow by providing "shortcuts" to commands you use frequently.
This challenge will be to set up a basic alias in your global git config (usually located at `~/.gitconfig`).
For consistency, we'll use a command to show a consolidated view of our git log.
The command is

```bash
$ git log --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit
```

Rather than typing this out every time, we want to just use

```bash
$ git lp
```

## Challenge 3 - Interactive Rebase

[Interactive rebases](https://git-scm.com/docs/git-rebase) are very useful in re-writing history on your local branch.
It should be done with care (if at all) on any shared branches.
On your local branch, use an interactive rebase to re-arrange your git history.
By the time you're done, you should be able to run `git lp` (from challenge above) and get an output that looks something like

```txt
- docs: This commit should be the newest
- docs: This commit should come after instructions
- docs: Instructions for Git Kata
```

If you want to push this branch to your remote repository (assuming it exists in the remote), you'll have to force push.
Again, this should almost never happen on a shared branch, and if it does, the team should be aware and probably do it together.
