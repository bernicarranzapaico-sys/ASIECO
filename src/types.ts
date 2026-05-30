/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Program {
  id: string;
  name: string;
  shortDesc: string;
  longDesc: string;
  iconName: string;
  duration: string;
  syllabus: string[];
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Teacher {
  name: string;
  specialties: string[];
  background: string[];
  points: string[];
}
