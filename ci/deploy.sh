#!/usr/bin/env bash
#
# Copyright 2017 Octavian Hasna
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#         http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#

COMMIT_MESSAGE="$(git log --format=%B -n 1 ${TRAVIS_COMMIT})"

if [ "$TRAVIS_PULL_REQUEST" == "false" ] &&
   [[ "$COMMIT_MESSAGE" != "[no-deploy]"* ]]; then

    echo "Deploying to users.utcluj.ro"
    # add build number
    sed --in-place "s/(rev 1)/(rev $TRAVIS_BUILD_NUMBER)/g" src/main-app.html
    # build app
    polymer build
    # copy dist folder content to users.utcluj.ro
    lftp -u $FTP_USER,$FTP_PASS users.utcluj.ro -e 'mirror --delete --only-newer --reverse --verbose build/bundled ~/public_html ; exit'
else
   echo "Skip deploy"
fi
