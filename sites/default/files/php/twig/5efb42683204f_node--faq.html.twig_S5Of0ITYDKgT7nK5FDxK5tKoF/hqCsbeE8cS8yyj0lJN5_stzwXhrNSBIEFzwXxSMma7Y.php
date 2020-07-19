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

/* themes/custom/dawwie/templates/node/node--faq.html.twig */
class __TwigTemplate_4137afab3bdc70a3344dd310339afef6eea3a5bccb91934566b7ec2242f1da05 extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $tags = ["for" => 17];
        $filters = ["escape" => 2, "t" => 6, "render" => 40];
        $functions = ["file_url" => 2];

        try {
            $this->sandbox->checkSecurity(
                ['for'],
                ['escape', 't', 'render'],
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
        // line 1
        echo "<!-- Page Cover -->
<section class=\"page-cover darkOverlay sm-sectionPT sm-sectionPB text-center\" style=\"background-image: url(";
        // line 2
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, call_user_func_array($this->env->getFunction('file_url')->getCallable(), [$this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute(($context["node"] ?? null), "field_top_image", []), "entity", []), "field_media_image", []), "entity", []), "fileuri", []))]), "html", null, true);
        echo ");\">
    <div class=\"col-center text-center col-md-8 col-lg-7\">
        <h4 class=\"heading text-color-white1 mt10 mb20\">";
        // line 4
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["node"] ?? null), "label", [])), "html", null, true);
        echo "</h4>
        <ul class=\"breadcrumb\">
            <li class=\"text-color-white1\"><a href=\"";
        // line 6
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["frontpage"] ?? null)), "html", null, true);
        echo "\">";
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Home"));
        echo "</a></li>
            <li class=\"active text-color-white1\">";
        // line 7
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["node"] ?? null), "label", [])), "html", null, true);
        echo "</li>
        </ul>
    </div>
</section>
<section class=\"gymVideoSection overlaySection solidWhiteOverlay background-cover\" style=\"background-image: url(";
        // line 11
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($this->sandbox->ensureToStringAllowed(($context["base_path"] ?? null)) . $this->sandbox->ensureToStringAllowed(($context["directory"] ?? null))), "html", null, true);
        echo "/img/bg12.jpg);\">
    <div class=\"container\">
        <div class=\"row\">
            <div class=\"col-lg-7 col-sm-12 col-12 HGT600 xs-HGTAuto displayTable\">
                <div class=\"panel-group accordion accordion-default\" id=\"accordion1\" role=\"tablist\" aria-multiselectable=\"true\">
                    <section class=\"sectionPT\">
                        ";
        // line 17
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable($this->getAttribute(($context["node"] ?? null), "field_questions_answers", []));
        foreach ($context['_seq'] as $context["key"] => $context["item"]) {
            // line 18
            echo "                            <div class=\"panel panel-default\">
                                <div class=\"panel-heading\" role=\"tab\" id=\"heading";
            // line 19
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["key"] + 1), "html", null, true);
            echo "\">
                                    <h4 class=\"panel-title\">
                                        <a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" href=\"#collapse";
            // line 21
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["key"] + 1), "html", null, true);
            echo "\" aria-expanded=\"false\" aria-controls=\"collapse";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["key"] + 1), "html", null, true);
            echo "\">
                                            ";
            // line 22
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute($context["item"], "entity", []), "translation", [0 => ($context["language"] ?? null)], "method"), "field_faq_question", []), "value", [])), "html", null, true);
            echo "
                                        </a>
                                        <span class=\"ti-angle-down icon dropDownIcon\"></span>
                                    </h4>
                                </div>
                                <div id=\"collapse";
            // line 27
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["key"] + 1), "html", null, true);
            echo "\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"heading";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["key"] + 1), "html", null, true);
            echo "\" data-parent=\"#accordion1\">
                                    <div class=\"panel-body\">
                                        ";
            // line 29
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute($context["item"], "entity", []), "translation", [0 => ($context["language"] ?? null)], "method"), "field_faq_answer", []), "value", [])), "html", null, true);
            echo "
                                    </div>
                                </div>
                            </div>
                        ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['key'], $context['item'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 34
        echo "                    </section>
                </div>
            </div>
            <div class=\"col-lg-5 col-sm-12 col-12 HGT600 xs-HGTAuto displayTable\">
                <div class=\"displayTableCell verAlignMiddle xs-pb50\">
                    <div class=\"gym_video overlaySection gymPrimaryColorOverlay background-cover displayFlex justifyCenter alignItemsCenter\" style=\"background-image: url(";
        // line 39
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, call_user_func_array($this->env->getFunction('file_url')->getCallable(), [$this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute($this->getAttribute(($context["node"] ?? null), "field_video_poster", []), "entity", []), "field_media_image", []), "entity", []), "fileuri", []))]), "html", null, true);
        echo ");\">
                        <a href=\"";
        // line 40
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->sandbox->ensureToStringAllowed($this->getAttribute($this->getAttribute($this->getAttribute(($context["content"] ?? null), "field_youtube_link", []), 0, [], "array"), "#url", [], "array"))), "html", null, true);
        echo "\" class=\"popup-youtube video\" title=\"Image Title Come Here\">
                            <div id=\"play-video\" class=\"video-play-button\">
                                <span></span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>";
    }

    public function getTemplateName()
    {
        return "themes/custom/dawwie/templates/node/node--faq.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  145 => 40,  141 => 39,  134 => 34,  123 => 29,  116 => 27,  108 => 22,  102 => 21,  97 => 19,  94 => 18,  90 => 17,  81 => 11,  74 => 7,  68 => 6,  63 => 4,  58 => 2,  55 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("", "themes/custom/dawwie/templates/node/node--faq.html.twig", "/home/dawwieco/public_html/themes/custom/dawwie/templates/node/node--faq.html.twig");
    }
}
