import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Target, 
  PlusCircle,
  CreditCard,
  ShoppingCart,
  Home,
  Utensils,
  Car,
  Gamepad2
} from "lucide-react";
import heroImage from "@/assets/finance-hero.jpg";

const Dashboard = () => {
  const monthlyBudget = 1500;
  const currentSpending = 980;
  const spendingPercentage = (currentSpending / monthlyBudget) * 100;

  const goals = [
    { name: "Emergency Fund", target: 2000, current: 750, category: "savings" },
    { name: "New Laptop", target: 1200, current: 400, category: "purchase" },
    { name: "Spring Break Trip", target: 800, current: 220, category: "travel" }
  ];

  const recentTransactions = [
    { id: 1, description: "Starbucks Coffee", amount: -5.45, category: "food", date: "Today", icon: Utensils },
    { id: 2, description: "Uber Ride", amount: -12.30, category: "transport", date: "Today", icon: Car },
    { id: 3, description: "Groceries", amount: -68.50, category: "food", date: "Yesterday", icon: ShoppingCart },
    { id: 4, description: "Part-time Job", amount: 250.00, category: "income", date: "Yesterday", icon: DollarSign },
    { id: 5, description: "Netflix Subscription", amount: -15.99, category: "entertainment", date: "2 days ago", icon: Gamepad2 }
  ];

  const categorySpending = [
    { name: "Food & Dining", amount: 320, budget: 400, color: "bg-finance-warning" },
    { name: "Transportation", amount: 180, budget: 200, color: "bg-finance-accent" },
    { name: "Entertainment", amount: 95, budget: 150, color: "bg-finance-secondary" },
    { name: "Shopping", amount: 240, budget: 300, color: "bg-finance-primary" },
    { name: "Bills", amount: 145, budget: 200, color: "bg-finance-danger" }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'food': return Utensils;
      case 'transport': return Car;
      case 'entertainment': return Gamepad2;
      case 'shopping': return ShoppingCart;
      case 'income': return DollarSign;
      default: return CreditCard;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-primary">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Financial Dashboard" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative px-6 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Smart Finance Manager
              </h1>
              <p className="text-xl md:text-2xl opacity-90 mb-8">
                AI-powered insights for smarter spending decisions
              </p>
              <Button size="lg" variant="secondary" className="bg-white text-finance-primary hover:bg-gray-100">
                <PlusCircle className="w-5 h-5 mr-2" />
                Add Transaction
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Dashboard */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-card shadow-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Balance</CardTitle>
              <DollarSign className="h-4 w-4 text-finance-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-finance-success">$2,847.32</div>
              <p className="text-xs text-muted-foreground">
                <TrendingUp className="inline w-3 h-3 mr-1" />
                +12.5% from last month
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Monthly Spending</CardTitle>
              <CreditCard className="h-4 w-4 text-finance-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${currentSpending.toFixed(2)}</div>
              <div className="flex items-center justify-between mt-2">
                <p className="text-xs text-muted-foreground">of ${monthlyBudget} budget</p>
                <Badge variant={spendingPercentage > 80 ? "destructive" : "secondary"}>
                  {spendingPercentage.toFixed(0)}%
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">This Week</CardTitle>
              <TrendingDown className="h-4 w-4 text-finance-danger" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$234.87</div>
              <p className="text-xs text-muted-foreground">
                -8.2% vs last week
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Savings Goal</CardTitle>
              <Target className="h-4 w-4 text-finance-secondary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$1,370</div>
              <p className="text-xs text-muted-foreground">
                68% of annual goal
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Budget Progress */}
          <div className="lg:col-span-2">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CreditCard className="w-5 h-5 mr-2 text-finance-primary" />
                  Monthly Budget Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Overall Progress</span>
                    <span className="text-sm text-muted-foreground">
                      ${currentSpending} / ${monthlyBudget}
                    </span>
                  </div>
                  <Progress value={spendingPercentage} className="h-3" />
                </div>

                <div className="space-y-4">
                  {categorySpending.map((category) => (
                    <div key={category.name}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">{category.name}</span>
                        <span className="text-sm text-muted-foreground">
                          ${category.amount} / ${category.budget}
                        </span>
                      </div>
                      <Progress 
                        value={(category.amount / category.budget) * 100} 
                        className="h-2"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Goals */}
          <div>
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="w-5 h-5 mr-2 text-finance-secondary" />
                  Financial Goals
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {goals.map((goal) => (
                  <div key={goal.name} className="p-4 bg-muted rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">{goal.name}</h4>
                      <Badge variant="outline">
                        {((goal.current / goal.target) * 100).toFixed(0)}%
                      </Badge>
                    </div>
                    <div className="text-sm text-muted-foreground mb-2">
                      ${goal.current} / ${goal.target}
                    </div>
                    <Progress value={(goal.current / goal.target) * 100} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Recent Transactions */}
        <Card className="mt-8 shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center">
              <CreditCard className="w-5 h-5 mr-2 text-finance-primary" />
              Recent Transactions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentTransactions.map((transaction) => {
                const IconComponent = getCategoryIcon(transaction.category);
                return (
                  <div key={transaction.id} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-background rounded-full">
                        <IconComponent className="w-4 h-4 text-finance-primary" />
                      </div>
                      <div>
                        <p className="font-medium">{transaction.description}</p>
                        <p className="text-sm text-muted-foreground">{transaction.date}</p>
                      </div>
                    </div>
                    <div className={`font-semibold ${
                      transaction.amount > 0 ? 'text-finance-success' : 'text-foreground'
                    }`}>
                      {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount).toFixed(2)}
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;