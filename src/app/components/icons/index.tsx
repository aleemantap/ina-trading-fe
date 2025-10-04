// components/Icons.tsx
import {
  FaBox,
  FaClipboardList,
  FaCog,
  FaSignOutAlt,
  FaLifeRing,
  FaEnvelope,
} from "react-icons/fa";
import { MdDashboard } from "react-icons/md";

export const Icons = {
  overview: (props: React.SVGProps<SVGSVGElement>) => (
    <MdDashboard {...props} />
  ),
  product: (props: React.SVGProps<SVGSVGElement>) => <FaBox {...props} />,
  orders: (props: React.SVGProps<SVGSVGElement>) => (
    <FaClipboardList {...props} />
  ),
  setting: (props: React.SVGProps<SVGSVGElement>) => <FaCog {...props} />,
  help: (props: React.SVGProps<SVGSVGElement>) => <FaLifeRing {...props} />,
  contact: (props: React.SVGProps<SVGSVGElement>) => <FaEnvelope {...props} />,
  logout: (props: React.SVGProps<SVGSVGElement>) => <FaSignOutAlt {...props} />,
};
