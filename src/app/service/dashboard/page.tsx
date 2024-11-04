import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Shield,
  AlertCircle,
  Code2,
  Lock,
  Activity,
  FileCode2,
} from "lucide-react";

export default function Page() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      {/* Security Overview Cards */}
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Active Vulnerabilities
            </CardTitle>
            <AlertCircle className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">
              4 critical, 8 moderate
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Smart Contracts Audited
            </CardTitle>
            <FileCode2 className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
            <p className="text-xs text-muted-foreground">Last 30 days</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Security Score
            </CardTitle>
            <Shield className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">85%</div>
            <p className="text-xs text-muted-foreground">+5% from last scan</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Area */}
      <div className="grid gap-4 md:grid-cols-2">
        {/* Recent Security Alerts */}
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle className="text-lg">Recent Security Alerts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* You can map through actual alerts here */}
              <div className="flex items-center space-x-4">
                <Lock className="h-4 w-4 text-amber-500" />
                <div>
                  <p className="text-sm font-medium">
                    Authentication Vulnerability
                  </p>
                  <p className="text-xs text-muted-foreground">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Code2 className="h-4 w-4 text-red-500" />
                <div>
                  <p className="text-sm font-medium">
                    Smart Contract Risk Detected
                  </p>
                  <p className="text-xs text-muted-foreground">5 hours ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Security Metrics */}
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle className="text-lg">Audit Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Activity className="h-4 w-4 text-blue-500" />
                <div>
                  <p className="text-sm font-medium">
                    Smart Contract Scan Complete
                  </p>
                  <p className="text-xs text-muted-foreground">
                    DeFi Protocol XYZ
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Shield className="h-4 w-4 text-green-500" />
                <div>
                  <p className="text-sm font-medium">
                    Security Assessment Updated
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Blockchain Bridge Audit
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
