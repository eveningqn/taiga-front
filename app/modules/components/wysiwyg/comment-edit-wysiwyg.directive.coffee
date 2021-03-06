###
# Copyright (C) 2014-2017 Andrey Antukh <niwi@niwi.nz>
# Copyright (C) 2014-2017 Jesús Espino Garcia <jespinog@gmail.com>
# Copyright (C) 2014-2017 David Barragán Merino <bameda@dbarragan.com>
# Copyright (C) 2014-2017 Alejandro Alonso <alejandro.alonso@kaleidos.net>
# Copyright (C) 2014-2017 Juan Francisco Alcántara <juanfran.alcantara@kaleidos.net>
# Copyright (C) 2014-2017 Xavi Julian <xavier.julian@kaleidos.net>
#
# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU Affero General Public License as
# published by the Free Software Foundation, either version 3 of the
# License, or (at your option) any later version.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
# GNU Affero General Public License for more details.
#
# You should have received a copy of the GNU Affero General Public License
# along with this program. If not, see <http://www.gnu.org/licenses/>.
#
# File: modules/components/wysiwyg/comment-edit-wysiwyg.directive.coffee
###

CommentEditWysiwyg = (attachmentsFullService) ->
    link = ($scope, $el, $attrs) ->
        types = {
            epics: "epic",
            userstories: "us",
            issues: "issue",
            tasks: "task"
        }

        uploadFile = (file, cb) ->
            return attachmentsFullService.addAttachment($scope.vm.projectId, $scope.vm.comment.comment.id, types[$scope.vm.comment.comment._name], file, true, true).then (result) ->
                cb(result.getIn(['file', 'name']), result.getIn(['file', 'url']))

        $scope.uploadFiles = (files, cb) ->
            for file in files
                uploadFile(file, cb)

    return {
        scope: true,
        link: link,
        template: """
            <div>
                <tg-wysiwyg
                    editonly
                    required
                    content='vm.comment.comment'
                    on-save="vm.saveComment(text, cb)"
                    on-cancel="vm.onEditMode({commentId: vm.comment.id})"
                    on-upload-file='uploadFiles(files, cb)'>
                </tg-wysiwyg>
            </div>
        """
    }

angular.module("taigaComponents")
    .directive("tgCommentEditWysiwyg", ["tgAttachmentsFullService", CommentEditWysiwyg])
