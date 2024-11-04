import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  AlertCircle,
  GitBranch,
  Database,
  Network,
  ShieldAlert,
  FileWarning,
  CheckCircle2,
  Layers,
} from "lucide-react";

const VulnerabilitiesPage = () => {
  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Vulnerability Scanner</h1>
          <p className="text-muted-foreground">
            Deep scan for security vulnerabilities across your infrastructure
          </p>
        </div>
        <Button className="bg-red-600 hover:bg-red-700">
          <ShieldAlert className="mr-2 h-4 w-4" />
          Start Security Scan
        </Button>
      </div>

      {/* Scan Target Options */}
      <div className="grid md:grid-cols-3 gap-4">
        <Card className="hover:border-red-500/50 cursor-pointer transition-colors">
          <CardHeader>
            <CardTitle className="flex items-center text-lg">
              <Network className="mr-2 h-5 w-5" />
              Network Scan
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Input placeholder="Enter IP range or hostname" className="mb-4" />
            <p className="text-xs text-muted-foreground">
              Example: 192.168.1.0/24 or example.com
            </p>
          </CardContent>
        </Card>

        <Card className="hover:border-blue-500/50 cursor-pointer transition-colors">
          <CardHeader>
            <CardTitle className="flex items-center text-lg">
              <Database className="mr-2 h-5 w-5" />
              Database Security
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Input placeholder="Database connection string" className="mb-4" />
            <p className="text-xs text-muted-foreground">
              Scan databases for security misconfigurations
            </p>
          </CardContent>
        </Card>

        <Card className="hover:border-purple-500/50 cursor-pointer transition-colors">
          <CardHeader>
            <CardTitle className="flex items-center text-lg">
              <GitBranch className="mr-2 h-5 w-5" />
              CI/CD Pipeline
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Input placeholder="Pipeline URL or identifier" className="mb-4" />
            <p className="text-xs text-muted-foreground">
              Analyze CI/CD pipeline for security gaps
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Scan Configuration */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Layers className="mr-2 h-5 w-5" />
            Vulnerability Scan Configuration
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Scan Types */}
            <div className="space-y-4">
              <h3 className="font-medium">Scan Types</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="sql"
                    className="rounded"
                    defaultChecked
                  />
                  <label htmlFor="sql">SQL Injection</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="xss"
                    className="rounded"
                    defaultChecked
                  />
                  <label htmlFor="xss">Cross-Site Scripting (XSS)</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="csrf"
                    className="rounded"
                    defaultChecked
                  />
                  <label htmlFor="csrf">CSRF Vulnerabilities</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="auth"
                    className="rounded"
                    defaultChecked
                  />
                  <label htmlFor="auth">Authentication Flaws</label>
                </div>
              </div>
            </div>

            {/* Scan Depth */}
            <div className="space-y-4">
              <h3 className="font-medium">Scan Depth</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <input type="radio" id="quick" name="depth" />
                  <label htmlFor="quick">Quick Scan (15 minutes)</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="standard"
                    name="depth"
                    defaultChecked
                  />
                  <label htmlFor="standard">Standard Scan (1 hour)</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="radio" id="deep" name="depth" />
                  <label htmlFor="deep">Deep Scan (3+ hours)</label>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recent Vulnerabilities */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <AlertCircle className="mr-2 h-5 w-5" />
            Recent Vulnerability Findings
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center space-x-4 p-3 bg-red-500/10 rounded-lg">
              <ShieldAlert className="h-5 w-5 text-red-500" />
              <div>
                <p className="font-medium">Critical SQL Injection</p>
                <p className="text-sm text-muted-foreground">
                  Endpoint: /api/users/search
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-3 bg-yellow-500/10 rounded-lg">
              <FileWarning className="h-5 w-5 text-yellow-500" />
              <div>
                <p className="font-medium">Insecure Configuration</p>
                <p className="text-sm text-muted-foreground">
                  Database: Production MongoDB
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-3 bg-green-500/10 rounded-lg">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              <div>
                <p className="font-medium">Resolved: XSS Vulnerability</p>
                <p className="text-sm text-muted-foreground">
                  Fixed in deployment: bhasma-web-v2.3.1
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VulnerabilitiesPage;
