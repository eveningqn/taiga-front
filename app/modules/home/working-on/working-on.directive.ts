/*
 * Copyright (C) 2014-2017 Taiga Agile LLC <taiga@taiga.io>
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
 * File: working-on.directive.coffee
 */

let WorkingOnDirective = function(homeService, currentUserService) {
    let link = function(scope, el, attrs, ctrl) {
        let user = currentUserService.getUser();
        // If we are not logged in the user will be null
        if (user) {
          let userId = user.get("id");
          return ctrl.getWorkInProgress(userId);
      }
    };

    return {
        controller: "WorkingOn",
        controllerAs: "vm",
        templateUrl: "home/working-on/working-on.html",
        scope: {},
        link
    };
};

WorkingOnDirective.$inject = [
    "tgHomeService",
    "tgCurrentUserService"
];

angular.module("taigaHome").directive("tgWorkingOn", WorkingOnDirective);
