# hr-api-helper
An interface to help build Hello retail API request urls

This is also an excercise for me to learn how to work with Branches.

Git workflow:

Git fetch will download a copy of the entire repository, but NOT change anything about your local branches.
Once git fetch has been executed you will have the local repository you are working in, and a copy of the current state of the remote repository, this is when you can see if your local EXISTING branches are behind the remote branches (if so you can checkout the branch and perform a git pull to get up to date with that particular remote branch).
If you have a remote branch with no equivalent local branch, you can make a local branch and switch to it, then execute git pull origin/BRANCH-NAME

If you accidentally pull changes from a remote development branch into the local main branch, you can reset back to the state of the remote main branch with this command: git reset --hard origin/main (MAKE SURE TO BE ON THE MAIN BRANCH WHEN DOING THIS)
https://www.codegrepper.com/code-examples/shell/remove+all+the+local+changes+git