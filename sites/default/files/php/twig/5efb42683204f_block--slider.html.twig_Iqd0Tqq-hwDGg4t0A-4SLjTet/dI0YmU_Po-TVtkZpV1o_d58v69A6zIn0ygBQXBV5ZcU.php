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

/* themes/custom/dawwie/templates/block/block--slider.html.twig */
class __TwigTemplate_5aff0a7f35e915487672e99db64f2a8f0c7b4e1f9534f1302a379532528c232d extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $tags = ["for" => 35];
        $filters = ["first" => 35, "escape" => 39];
        $functions = ["file_url" => 49];

        try {
            $this->sandbox->checkSecurity(
                ['for'],
                ['first', 'escape'],
                ['file_url']
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
        // line 32
        echo "<section class=\"features-area\">
    <div class=\"container-fluid p-0\">
        <div class=\"row m-0\">
            ";
        // line 35
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable($this->getAttribute(($context["content"] ?? null), "field_slider_content", []));
        foreach ($context['_seq'] as $context["key"] => $context["items"]) {
            if ((twig_first($this->env, $context["key"]) != "#")) {
                // line 36
                echo "                <div class=\"col-lg-4 col-sm-6 col-md-6 p-0\">
                    <div class=\"single-features-box\">
                        <div class=\"inner-content\">
                            ";
                // line 39
                echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute(($context["content"] ?? null), "field_slider_content", []), $context["key"], [], "array")), "html", null, true);
                echo "
                        </div>
                    </div>
                </div>
            ";
            }
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['key'], $context['items'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 44
        echo "        </div>
    </div>
    <div class=\"slideshow-box\">
        <ul class='slideshow-slides owl-carousel owl-theme'>
            ";
        // line 48
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable($this->getAttribute(($context["content"] ?? null), "field_images", []));
        foreach ($context['_seq'] as $context["key"] => $context["items"]) {
            if ((twig_first($this->env, $context["key"]) != "#")) {
                // line 49
                echo "                  <li><span class=\"bg3\" style=\"background-image:url(";
                echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, call_user_func_array($this->env->getFunction('file_url')->getCallable(), [$this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute(($context["content"] ?? null), "field_images", []), $context["key"], [], "array"), "#media", [], "array"), "field_media_image", []), "entity", []), "uri", []), "value", []))]), "html", null, true);
                echo ")\"></span></li>
            ";
            }
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['key'], $context['items'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 51
        echo "        </ul>
    </div>
</section>";
    }

    public function getTemplateName()
    {
        return "themes/custom/dawwie/templates/block/block--slider.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  103 => 51,  93 => 49,  88 => 48,  82 => 44,  70 => 39,  65 => 36,  60 => 35,  55 => 32,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("", "themes/custom/dawwie/templates/block/block--slider.html.twig", "/home/dawwieco/public_html/themes/custom/dawwie/templates/block/block--slider.html.twig");
    }
}
