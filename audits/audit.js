/**
 * @license
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

class Audit {
  /**
   * @return {!Array<string>}
   */
  static get tags() {
    throw new Error('Audit tags must be overridden');
  }

  /**
   * @return {string}
   */
  static get name() {
    throw new Error('Audit name must be overridden');
  }

  /**
   * @return {string}
   */
  static get description() {
    throw new Error('Audit description must be overridden');
  }

  /**
   * @param {(boolean|number|string)} value
   * @param {?(boolean|number|string)=} rawValue
   * @param {string=} debugString Optional string to describe any error condition encountered.
   * @return {!AuditResult}
   */
  static generateAuditResult(value, rawValue, debugString) {
    return {
      value,
      rawValue,
      debugString,
      name: this.name,
      tags: this.tags,
      description: this.description
    };
  }
}

module.exports = Audit;
