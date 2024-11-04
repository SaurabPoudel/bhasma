import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Code2,
  Upload,
  GitBranch,
  Shield,
  AlertCircle,
  Bug,
  FileWarning,
  CheckCircle2,
} from "lucide-react";

const CodeAnalysisPage = () => {
  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Code Security Scanner</h1>
          <p className="text-muted-foreground">
            Analyze your code for security vulnerabilities and best practices
          </p>
        </div>
        <Button className="bg-green-600 hover:bg-green-700">
          <Shield className="mr-2 h-4 w-4" />
          Start Scan
        </Button>
      </div>

      {/* Code Input Options */}
      <div className="grid md:grid-cols-3 gap-4">
        <Card className="hover:border-green-500/50 cursor-pointer transition-colors">
          <CardHeader>
            <CardTitle className="flex items-center text-lg">
              <Code2 className="mr-2 h-5 w-5" />
              Paste Code
            </CardTitle>
          </CardHeader>
          <CardContent>
            <textarea
              className="min-h-[200px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Paste your code here..."
            />
          </CardContent>
        </Card>

        <Card className="hover:border-blue-500/50 cursor-pointer transition-colors">
          <CardHeader>
            <CardTitle className="flex items-center text-lg">
              <Upload className="mr-2 h-5 w-5" />
              Upload Files
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="border-2 border-dashed rounded-lg p-8 text-center hover:border-primary">
              <Input type="file" className="hidden" id="file-upload" multiple />
              <label
                htmlFor="file-upload"
                className="cursor-pointer text-muted-foreground hover:text-primary"
              >
                <span>Drop files here or click to upload</span>
                <p className="text-xs mt-2">
                  Supports: .js, .ts, .py, .sol, and more
                </p>
              </label>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:border-purple-500/50 cursor-pointer transition-colors">
          <CardHeader>
            <CardTitle className="flex items-center text-lg">
              <GitBranch className="mr-2 h-5 w-5" />
              GitHub Repository
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Input placeholder="Repository URL" className="mb-4" />
            <p className="text-xs text-muted-foreground">
              Enter your GitHub repository URL to scan the entire codebase
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Scan Options */}
      <Card>
        <CardHeader>
          <CardTitle>Scan Configuration</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="vuln"
                className="rounded"
                defaultChecked
              />
              <label htmlFor="vuln">Vulnerabilities</label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="best"
                className="rounded"
                defaultChecked
              />
              <label htmlFor="best">Best Practices</label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="deps"
                className="rounded"
                defaultChecked
              />
              <label htmlFor="deps">Dependencies</label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="secrets"
                className="rounded"
                defaultChecked
              />
              <label htmlFor="secrets">Secret Detection</label>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Sample Results Preview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Shield className="mr-2 h-5 w-5" />
            Scan Results Preview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center space-x-4 p-3 bg-red-500/10 rounded-lg">
              <AlertCircle className="h-5 w-5 text-red-500" />
              <div>
                <p className="font-medium">Critical Vulnerability</p>
                <p className="text-sm text-muted-foreground">
                  SQL Injection risk detected
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-3 bg-yellow-500/10 rounded-lg">
              <Bug className="h-5 w-5 text-yellow-500" />
              <div>
                <p className="font-medium">Security Warning</p>
                <p className="text-sm text-muted-foreground">
                  Outdated dependency detected
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-3 bg-blue-500/10 rounded-lg">
              <FileWarning className="h-5 w-5 text-blue-500" />
              <div>
                <p className="font-medium">Best Practice</p>
                <p className="text-sm text-muted-foreground">
                  Consider implementing input validation
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-3 bg-green-500/10 rounded-lg">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              <div>
                <p className="font-medium">Passed Check</p>
                <p className="text-sm text-muted-foreground">
                  Authentication implementation is secure
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CodeAnalysisPage;
