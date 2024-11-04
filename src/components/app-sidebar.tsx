"use client";

import * as React from "react";
import {
  BookOpen,
  Settings2,
  Shield,
  ShieldCheck,
  Blocks,
  FileCode2,
  History,
  BarChart3,
  Lock,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Bhasma Security",
      logo: Shield,
      plan: "Enterprise",
    },
    {
      name: "Bhasma Audit",
      logo: ShieldCheck,
      plan: "Professional",
    },
  ],
  navMain: [
    {
      title: "Security Scanner",
      url: "/service/scanner",
      icon: Shield,
      isActive: true,
      items: [
        {
          title: "Code Analysis",
          url: "/service/scanner/code",
        },
        {
          title: "Vulnerability Scan",
          url: "/service/scanner/vulnerabilities",
        },
        {
          title: "Scan History",
          url: "/service/scanner/history",
        },
      ],
    },
    {
      title: "Blockchain Audit",
      url: "/service/blockchain",
      icon: Blocks,
      items: [
        {
          title: "Smart Contracts",
          url: "/service/blockchain/contracts",
        },
        {
          title: "DeFi Analysis",
          url: "/service/blockchain/defi",
        },
        {
          title: "Audit Reports",
          url: "/service/blockchain/reports",
        },
      ],
    },
    {
      title: "Reports",
      url: "/service/reports",
      icon: FileCode2,
      items: [
        {
          title: "Security Reports",
          url: "/service/reports/security",
        },
        {
          title: "Audit Findings",
          url: "/service/reports/findings",
        },
        {
          title: "Analytics",
          url: "/service/reports/analytics",
        },
      ],
    },
    {
      title: "Documentation",
      url: "/service/docs",
      icon: BookOpen,
      items: [
        {
          title: "Getting Started",
          url: "/service/docs/start",
        },
        {
          title: "Best Practices",
          url: "/service/docs/practices",
        },
        {
          title: "API Reference",
          url: "/service/docs/api",
        },
      ],
    },
    {
      title: "Settings",
      url: "/service/settings",
      icon: Settings2,
      items: [
        {
          title: "Security Rules",
          url: "/service/settings/rules",
        },
        {
          title: "API Keys",
          url: "/service/settings/api",
        },
        {
          title: "Team Management",
          url: "/service/settings/team",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Recent Scans",
      url: "/service/recent",
      icon: History,
    },
    {
      name: "Security Metrics",
      url: "/service/metrics",
      icon: BarChart3,
    },
    {
      name: "Compliance",
      url: "/service/compliance",
      icon: Lock,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
