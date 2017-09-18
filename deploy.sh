#!bin/sh
set -e

cd ./build
rm -rf .git

git init
git remote add origin git@github.com:roytang121/roytang121.github.io.git

git fetch origin master
git add --all
git commit -am "ci deploy"
git push origin master --force
