import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Search,
  Calendar,
  Shield,
  FileCode2,
  Network,
  Download,
  Filter,
  Clock,
} from "lucide-react";

const ScannerHistory = () => {
  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Scan History</h1>
          <p className="text-muted-foreground">
            View and analyze your previous security scans
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      {/* Search and Filter Bar */}
      <Card>
        <CardContent className="pt-6">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search scans..." className="pl-8" />
            </div>
            <div className="relative">
              <Calendar className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="date" className="pl-8" />
            </div>
            <select className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
              <option value="">All Scan Types</option>
              <option value="code">Code Analysis</option>
              <option value="vulnerability">Vulnerability Scan</option>
              <option value="network">Network Scan</option>
            </select>
            <select className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
              <option value="">All Severities</option>
              <option value="critical">Critical</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>
        </CardContent>
      </Card>

      {/* Scan History Timeline */}
      <div className="space-y-4">
        {/* Today */}
        <div>
          <h3 className="text-sm font-medium text-muted-foreground mb-3">
            Today
          </h3>
          <Card>
            <CardContent className="divide-y">
              <div className="py-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-red-500/10 rounded-full">
                    <Shield className="h-5 w-5 text-red-500" />
                  </div>
                  <div>
                    <h4 className="font-medium">Critical Vulnerability Scan</h4>
                    <p className="text-sm text-muted-foreground">
                      api.bhasma.io
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <p className="text-sm font-medium">12 Issues Found</p>
                    <p className="text-xs text-muted-foreground">2 hours ago</p>
                  </div>
                  <Button variant="ghost" size="sm">
                    View Details
                  </Button>
                </div>
              </div>

              <div className="py-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-blue-500/10 rounded-full">
                    <FileCode2 className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-medium">Smart Contract Audit</h4>
                    <p className="text-sm text-muted-foreground">
                      TokenContract.sol
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <p className="text-sm font-medium">3 Issues Found</p>
                    <p className="text-xs text-muted-foreground">4 hours ago</p>
                  </div>
                  <Button variant="ghost" size="sm">
                    View Details
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Yesterday */}
        <div>
          <h3 className="text-sm font-medium text-muted-foreground mb-3">
            Yesterday
          </h3>
          <Card>
            <CardContent className="divide-y">
              <div className="py-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-yellow-500/10 rounded-full">
                    <Network className="h-5 w-5 text-yellow-500" />
                  </div>
                  <div>
                    <h4 className="font-medium">Network Security Scan</h4>
                    <p className="text-sm text-muted-foreground">
                      Internal Network
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <p className="text-sm font-medium">7 Issues Found</p>
                    <p className="text-xs text-muted-foreground">
                      Yesterday, 15:30
                    </p>
                  </div>
                  <Button variant="ghost" size="sm">
                    View Details
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Statistics Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Scan Statistics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-4 text-center">
              <div className="p-4 rounded-lg bg-background">
                <p className="text-2xl font-bold">147</p>
                <p className="text-sm text-muted-foreground">Total Scans</p>
              </div>
              <div className="p-4 rounded-lg bg-background">
                <p className="text-2xl font-bold text-red-500">23</p>
                <p className="text-sm text-muted-foreground">Critical Issues</p>
              </div>
              <div className="p-4 rounded-lg bg-background">
                <p className="text-2xl font-bold text-yellow-500">45</p>
                <p className="text-sm text-muted-foreground">Warnings</p>
              </div>
              <div className="p-4 rounded-lg bg-background">
                <p className="text-2xl font-bold text-green-500">79</p>
                <p className="text-sm text-muted-foreground">Resolved</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ScannerHistory;
