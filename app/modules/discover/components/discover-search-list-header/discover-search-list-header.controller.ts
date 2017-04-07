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
 * File: discover-search-list-header.controller.coffee
 */

class DiscoverSearchListHeaderController {
    static initClass() {
        this.$inject = [];
    }

    constructor() {
        this.like_is_open = this.orderBy.indexOf('-total_fans') === 0;
        this.activity_is_open = this.orderBy.indexOf('-total_activity') === 0;
    }

    openLike() {
        this.like_is_open = true;
        this.activity_is_open = false;

        return this.setOrderBy('-total_fans_last_week');
    }

    openActivity() {
        this.activity_is_open = true;
        this.like_is_open = false;

        return this.setOrderBy('-total_activity_last_week');
    }

    setOrderBy(type) {
        if (type == null) { type = ''; }
        if (!type) {
            this.like_is_open = false;
            this.activity_is_open = false;
        }

        return this.onChange({orderBy: type});
    }
}
DiscoverSearchListHeaderController.initClass();

angular.module("taigaDiscover").controller("DiscoverSearchListHeader", DiscoverSearchListHeaderController);
