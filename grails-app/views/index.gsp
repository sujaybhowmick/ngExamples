<!doctype html>
<html lang="en" ng-app="qebmsApp">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title>Server Validation Demo</title>
    <meta name="description" content="">
    <script src="js/app/scripts/vendor/jquery.min.js"></script>
    <script src="js/app/scripts/vendor/bootstrap.min.js"></script>
    <script src="js/app/scripts/vendor/angular.min.js"></script>
    <script src="js/app/scripts/vendor/angular-animate.min.js"></script>
    <script src="js/app/scripts/vendor/angular-sanitize.min.js"></script>
    <script src="js/app/scripts/vendor/angular-resource.min.js"></script>
    <script src="js/app/scripts/vendor/angular-ui-router.min.js"></script>
    <script src="js/app/scripts/vendor/angular-ui.min.js"></script>
    <script src="js/app/scripts/directives/directives.js"></script>
    <script src="js/app/scripts/services/services.js"></script>
    <script src="js/app/scripts/controllers/controllers.js"></script>
    <script src="js/app/scripts/app.js"></script>


    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/bootstrap-theme.min.css">
    <link rel="stylesheet" href="css/cover.css">
    <link rel="stylesheet" href="css/app.css">

</head>
<body>
<!-- Fixed navbar -->
<div class="navbar navbar-inverse navbar-fixed-top" role="navigation">
    <div class="container">
        <div class="navbar-header">
            <a class="navbar-brand" ui-sref="home">Budget Management System</a>
        </div>
        <div class="navbar-collapse collapse">
            <ul class="nav navbar-nav">
                <li ng-class="{ active: $state.includes('masters') }">
                    <a ui-sref="masters">Masters</a>
                </li>
                <li ng-class="{ active: $state.includes('transactions') }">
                    <a ui-sref="transactions">Transactions</a>
                </li>
            </ul>
        </div><!--/.nav-collapse -->
    </div>
</div>
<div class="container">
   <div app-error-messages></div>
   <div app-messages></div>
</div>

<!-- Add your site or application content here -->
<div ui-view class="container slide"></div>
<!-- Site footer -->
<div class="navbar navbar-inverse navbar-fixed-bottom text-center">
    <div class="container">
        <p class="navbar-text col-lg-12">&copy; Qualcomm Technologies Inc. 2014</p>
    </div>
</div>
</body>
</html>
