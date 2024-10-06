import { BiLogOut, BiSupport } from "react-icons/bi";
import { CgArrowsExchange } from "react-icons/cg";
import { CiUser, CiYoutube } from "react-icons/ci";
import {
  FaFacebookF,
  FaGoogle,
  FaHistory,
  FaLayerGroup,
  FaPlane,
  FaSearchPlus,
  FaUser,
  FaUserShield,
} from "react-icons/fa";
import { FaAngleDown, FaRegCommentDots } from "react-icons/fa6";
import { GrContactInfo, GrMenu } from "react-icons/gr";
import { HiBriefcase, HiOutlineSearch } from "react-icons/hi";
import { IoMdCall } from "react-icons/io";
import { IoCashOutline, IoSettingsOutline } from "react-icons/io5";
import { WiDayHaze } from "react-icons/wi";
import { GiCommercialAirplane } from "react-icons/gi";

import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
  MdNotificationsNone,
  MdOutlineDashboardCustomize,
  MdOutlineFlight,
  MdOutlineTour,
  MdPeople,
} from "react-icons/md";

import { GiAirplaneDeparture, GiAvoidance } from "react-icons/gi";
import { RiHotelLine, RiRefund2Line, RiVisaFill } from "react-icons/ri";
import { SlCalender, SlSocialLinkedin } from "react-icons/sl";
import {
  TbCashRegister,
  TbLocationSearch,
  TbLogin2,
  TbReport,
  TbTransactionDollar,
} from "react-icons/tb";
import { TfiInstagram, TfiTwitter } from "react-icons/tfi";
import { VscGitPullRequestNewChanges, VscIssueReopened } from "react-icons/vsc";

// Define icon sets
export const IconTopBar = {
  Menu: GrMenu,
  Search: HiOutlineSearch,
  downArrow: FaAngleDown,
  myProfile: CiUser,
  accountSettings: IoSettingsOutline,
  logout: BiLogOut,
  Notification: MdNotificationsNone,
  comments: FaRegCommentDots,
};

export const IconSidebar = {
  Plane: GiCommercialAirplane,
  BackButton: MdKeyboardDoubleArrowLeft,
  OpenButton: MdKeyboardDoubleArrowRight,
  DownArrow: FaAngleDown,
  dashboard: MdOutlineDashboardCustomize,
  SearchEngine: TbLocationSearch,
  SharePnr: GrContactInfo,
  BookingHistory: FaHistory,
  Flight: MdOutlineFlight,
  Void: GiAvoidance,
  Refund: RiRefund2Line,
  Reissue: VscIssueReopened,
  Hotel: RiHotelLine,
  Visa: RiVisaFill,
  TourPackage: MdOutlineTour,
  GroupTour: FaLayerGroup,
  PartialPayment: IoCashOutline,
  report: TbReport,
  AddPassenger: MdPeople,
  calender: SlCalender,
  topUpRequest: VscGitPullRequestNewChanges,
  Support: BiSupport,
  Transaction: TbTransactionDollar,
  Payment: TbCashRegister,
  bankList: HiBriefcase,
  company: HiBriefcase,
  Settings: IoSettingsOutline,
  Profile: TbTransactionDollar,
  authentication: TbLogin2,
};

// Other icon sets can be similarly defined
export const IconDashboard = { authentication: TbLogin2 };
export const IconSearchEngine = {
  Swap: CgArrowsExchange,
  AddNew: FaSearchPlus,
  Day: WiDayHaze,
  DownArrow: FaAngleDown,
  Flight: GiAirplaneDeparture,
};
export const IconSharePnr = { Plane: FaPlane };
export const IconBookingHistory = { authentication: TbLogin2 };
export const IconPartialPayment = { authentication: TbLogin2 };
export const IconReport = { authentication: TbLogin2 };
export const IconAddPassenger = { authentication: TbLogin2 };
export const IconCalender = { authentication: TbLogin2 };
export const IconTopUpRequest = { authentication: TbLogin2 };
export const IconSupport = { authentication: TbLogin2 };
export const IconTransaction = { authentication: TbLogin2 };
export const IconPayment = { authentication: TbLogin2 };
export const IconBankList = { authentication: TbLogin2 };
export const IconCompany = { authentication: TbLogin2 };
export const IconSettings = { authentication: TbLogin2 };
export const IconProfile = { authentication: TbLogin2 };
export const IconAuthentication = {
  user: FaUser,
  agent: FaUserShield,
  Facebook: FaFacebookF,
  Google: FaGoogle,
};
export const IconFooter = {
  youtube: CiYoutube,
  facebook: FaFacebookF,
  linkedin: SlSocialLinkedin,
  instagram: TfiInstagram,
  twitter: TfiTwitter,
};
export const IconHomePage = { Phone: IoMdCall };
