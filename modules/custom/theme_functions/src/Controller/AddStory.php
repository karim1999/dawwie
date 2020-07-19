<?php

/**
 * @file
 * Contains \Drupal\theme_functions\Controller\AddStory
 */

namespace Drupal\theme_functions\Controller;

use Drupal\Core\Controller\ControllerBase;
use \Drupal\node\Entity\Node;
use \Drupal\file\Entity\File;

class AddStory extends ControllerBase {

  public function execute() {

    if (isset($_REQUEST) && !empty($_REQUEST)) {

      $data = $_REQUEST;
      $data['statement_1'] = " زمان كنت " . $data['statement_1'];
      $data['statement_2'] = " انا حاولت " . $data['statement_2'];
      $data['statement_3'] = " وفكرت في " . $data['statement_3'];
      $data['statement_4'] = " سألت واتكلمت مع " . $data['statement_4'];
      $data['statement_5'] = "وقالولى " . $data['statement_5'];
      $data['statement_6'] = "لحد ما " . $data['statement_6'];
      $data['statement_7'] = " ودلوقتى " . $data['statement_7'];
      
      $body = $data['statement_1']." ".$data['statement_2']." ".$data['statement_3']." ".$data['statement_4']." ".$data['statement_5']." ".$data['statement_6']." ".$data['statement_7'];

      $imgFid = 71;
      if ($data['user_gender'] == 'ذكر') {
        $imgFid = 61;
      }

      $node = Node::create([
          'type' => 'story',
          'uid' => $data['user_id'],
          'title' => $data['user_name'],
          'field_story_content' => $body,
          'field_story_photo' => [
            'target_id' => $imgFid
          ],
      ]);
      $node->save();
      $build = [
        '#markup' => $this->t('Registered Successfully'),
      ];
      return $build;
    }
  }

  function arrayExclude($array, Array $excludeKeys) {
    foreach ($excludeKeys as $key) {
      unset($array[$key]);
    }
    return $array;
  }

}
