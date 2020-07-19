<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* themes/custom/dawwie/templates/block/block--mainnavigation.html.twig */
class __TwigTemplate_5f8267eeaa6040b7738fdb52c619c4462a70b83380357357d45a9cfb550acdfb extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = [
            'content' => [$this, 'block_content'],
            'content1' => [$this, 'block_content1'],
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $tags = ["set" => 38, "if" => 48, "block" => 64];
        $filters = ["clean_class" => 42, "clean_id" => 46, "escape" => 49, "without" => 49, "t" => 51];
        $functions = [];

        try {
            $this->sandbox->checkSecurity(
                ['set', 'if', 'block'],
                ['clean_class', 'clean_id', 'escape', 'without', 't'],
                []
            );
        } catch (SecurityError $e) {
            $e->setSourceContext($this->getSourceContext());

            if ($e instanceof SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        // line 34
        echo "


";
        // line 38
        $context["classes"] = [0 => "block", 1 => "block-menu", 2 => "navigation", 3 => ("menu--" . \Drupal\Component\Utility\Html::getClass($this->sandbox->ensureToStringAllowed(        // line 42
($context["derivative_plugin_id"] ?? null)))), 4 => "navbar navbar-expand-lg"];
        // line 46
        $context["heading_id"] = ($this->sandbox->ensureToStringAllowed($this->getAttribute(($context["attributes"] ?? null), "id", [])) . \Drupal\Component\Utility\Html::getId("-menu"));
        // line 47
        echo "
";
        // line 48
        if (($context["is_front"] ?? null)) {
            // line 49
            echo "    <nav role=\"navigation\" aria-labelledby=\"";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["heading_id"] ?? null)), "html", null, true);
            echo "\"";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->env->getExtension('Drupal\Core\Template\TwigExtension')->withoutFilter($this->sandbox->ensureToStringAllowed($this->getAttribute(($context["attributes"] ?? null), "addClass", [0 => ($context["classes"] ?? null)], "method")), "role", "aria-labelledby"), "html", null, true);
            echo ">
        <div class=\"nav-brand\">
            <a href=\"";
            // line 51
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["frontpage"] ?? null)), "html", null, true);
            echo "\"><img src=\"";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($this->sandbox->ensureToStringAllowed(($context["base_path"] ?? null)) . $this->sandbox->ensureToStringAllowed(($context["directory"] ?? null))), "html", null, true);
            echo "/img/logo.png\" alt=\"";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Dawwie"));
            echo "\" title=\"";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Dawwie"));
            echo "\" class=\"mlogo\"></a>
        </div>
        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#nav-content\" aria-controls=\"nav-content\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">
            <span class=\"navbar-toggler-icon\"></span>
            <span class=\"navbar-toggler-icon\"></span>
            <span class=\"navbar-toggler-icon\"></span>
        </button>
        <div class=\"main-menu collapse navbar-collapse\" id=\"nav-content\">
            ";
            // line 60
            echo "            ";
            if ( !$this->getAttribute(($context["configuration"] ?? null), "label_display", [])) {
                // line 61
                echo "                ";
                $context["title_attributes"] = $this->getAttribute(($context["title_attributes"] ?? null), "addClass", [0 => "sr-only"], "method");
                // line 62
                echo "            ";
            }
            // line 63
            echo "            ";
            // line 64
            echo "            ";
            $this->displayBlock('content', $context, $blocks);
            // line 67
            echo "        </div>
    </nav>
";
        } else {
            // line 70
            echo "    <!--Logo-->
    <div class=\"logo\" data-mobile-logo=\"";
            // line 71
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($this->sandbox->ensureToStringAllowed(($context["base_path"] ?? null)) . $this->sandbox->ensureToStringAllowed(($context["directory"] ?? null))), "html", null, true);
            echo "/img/logo/logo-light.png\" data-sticky-logo=\"";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($this->sandbox->ensureToStringAllowed(($context["base_path"] ?? null)) . $this->sandbox->ensureToStringAllowed(($context["directory"] ?? null))), "html", null, true);
            echo "/img/logo/logo-light.png\">
        <a href=\"";
            // line 72
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["frontpage"] ?? null)), "html", null, true);
            echo "\"><img src=\"";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($this->sandbox->ensureToStringAllowed(($context["base_path"] ?? null)) . $this->sandbox->ensureToStringAllowed(($context["directory"] ?? null))), "html", null, true);
            echo "/img/logo/logo-light.png\"  alt=\"";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Dawwie"));
            echo "\" title=\"";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Dawwie"));
            echo "\" /></a>
    </div>
    <!-- Burger menu -->
    <div class=\"burger-menu\">
        <div class=\"line-menu line-half first-line\"></div>
        <div class=\"line-menu\"></div>
        <div class=\"line-menu line-half last-line\"></div>
    </div>
    <nav role=\"navigation\" aria-labelledby=\"";
            // line 80
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["heading_id"] ?? null)), "html", null, true);
            echo "\" class=\"navik-menu menu-caret\">
        ";
            // line 82
            echo "        ";
            if ( !$this->getAttribute(($context["configuration"] ?? null), "label_display", [])) {
                // line 83
                echo "            ";
                $context["title_attributes"] = $this->getAttribute(($context["title_attributes"] ?? null), "addClass", [0 => "sr-only"], "method");
                // line 84
                echo "        ";
            }
            // line 85
            echo "        ";
            // line 86
            echo "        ";
            $this->displayBlock('content1', $context, $blocks);
            // line 89
            echo "    </nav>

";
        }
        // line 111
        echo "
";
    }

    // line 64
    public function block_content($context, array $blocks = [])
    {
        // line 65
        echo "                ";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["content"] ?? null)), "html", null, true);
        echo "
            ";
    }

    // line 86
    public function block_content1($context, array $blocks = [])
    {
        // line 87
        echo "            ";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["content"] ?? null)), "html", null, true);
        echo "
        ";
    }

    public function getTemplateName()
    {
        return "themes/custom/dawwie/templates/block/block--mainnavigation.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  183 => 87,  180 => 86,  173 => 65,  170 => 64,  165 => 111,  160 => 89,  157 => 86,  155 => 85,  152 => 84,  149 => 83,  146 => 82,  142 => 80,  125 => 72,  119 => 71,  116 => 70,  111 => 67,  108 => 64,  106 => 63,  103 => 62,  100 => 61,  97 => 60,  80 => 51,  72 => 49,  70 => 48,  67 => 47,  65 => 46,  63 => 42,  62 => 38,  57 => 34,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("", "themes/custom/dawwie/templates/block/block--mainnavigation.html.twig", "C:\\projects\\web\\dawwie\\themes\\custom\\dawwie\\templates\\block\\block--mainnavigation.html.twig");
    }
}
