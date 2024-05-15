import Home from "../data/icon/home.png"
import Performance from "../data/icon/promotions.png"
import Report from "../data/icon/file.png"
import Audience from "../data/icon/customer.png"
import Post from "../data/icon/posts.png"
import Promotion from "../data/icon/posts.png"
import Calendar from "../data/icon/calendar.png"
import Members from "../data/icon/add-group.png"
import Inbox from "../data/icon/message.png"

export const items = [
 {
  title: 'Main',
  links: [
   {
    name: 'dashboard',
    icon: Home,
   },
   {
    name: 'Performance',
    icon: Performance ,
   },
   {
    name: 'Report',
    icon: Report ,
   },
   {
    name: 'Audience',
    icon: Audience,
   },
   {
    name: 'Posts',
    icon: Post,
   },
   {
    name: 'Promotions',
    icon: Promotion,
   },
   {
    name: 'Calendar',
    icon: Calendar,
   },
  ],
 },
 {
  title: 'Team',
  links: [
   {
    name: 'member',
    icon: Members,
   },
   {
    name: 'inbox',
    icon: Inbox,
   },
   {
    name: 'tasks',
    icon: Inbox,
   },
  ],
 },
];