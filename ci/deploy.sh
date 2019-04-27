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

    echo "Update build number"
    sed --in-place "s/(rev 1)/(rev $TRAVIS_BUILD_NUMBER)/g" src/components/university-page-app.js

    echo "Build app"
    polymer build

    echo "Copy build folder to users.utcluj.ro"
    LOCAL_PATH='./build/es5-bundled'
    REMOTE_PATH='./public_html'
    lftp -e "set dns:order 'inet'
      open ftp://users.utcluj.ro
      user $FTP_USER $FTP_PASS
      mirror --delete --continue --reverse --verbose $LOCAL_PATH $REMOTE_PATH
      bye"
else
   echo "Skip deploy"
fi
