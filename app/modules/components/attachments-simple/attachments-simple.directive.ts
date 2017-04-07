/*
 * Copyright (C) 2014-2015 Taiga Agile LLC <taiga@taiga.io>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 * File: attchments-simple.directive.coffee
 */

let AttachmentsSimpleDirective = function() {
    let link = function(scope, el, attrs, ctrl) {};

    return {
        scope: {},
        bindToController: {
            attachments: "=",
            onAdd: "&",
            onDelete: "&"
        },
        controller: "AttachmentsSimple",
        controllerAs: "vm",
        templateUrl: "components/attachments-simple/attachments-simple.html",
        link
    };
};

AttachmentsSimpleDirective.$inject = [];

angular.module("taigaComponents").directive("tgAttachmentsSimple", AttachmentsSimpleDirective);
