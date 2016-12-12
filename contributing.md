#Contributing

##General Workflow

1. Fork the repo
2. Clone down your fork
3. Cut a branch from master
4. Make commits to your branch
5. Push from you branch to your fork
6. Submit a pull request from your fork to the group repo
7. Wait for someone else to review and merge your pull request
8. Checkout master and pull down any new changes
9. Checkout your branch and rebase from master

##Detailed Workflow

###Forking

Click the fork button from the repo on github

### Cloning

From your shell:

```sh
git clone [your forked url]
```

###Branch

```sh
git checkout -b [name of branch]
```

###Commiting

Commit messages should be less than 50 characters and be in the present imperative tense.

```sh
git commit -m "[Your commit message]"
```

###Pushing

Only push to your forked repo. You should never be pushing directly to your groups master repo.

```sh
git push origin master
```

###Pulling 

Submit a pull request from your fork to the group repo. This is how all changes to the group should be made as it minimizes the risk of bad code being introduced to the production environment.

###Merging Pull Request

At least one other team member, but preferably multiple, should complete a thorough code review of each pull request. The merge should only be compeleted if the reviewers are confident that the additions are bug free and an improvement on the existing code base.

###Switching to master

Only pull down changes to the master branch. You can do this by doing

```sh
git checkout master
```

###Rebasing

We have adopted a rebase workflow to avoid a cluttered commit history caused by merge commit messages. After checking out your working branch, type in your shell:

```sh
git rebase master
```

